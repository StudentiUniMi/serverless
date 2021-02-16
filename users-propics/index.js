addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

const encodeGetParams = p =>
    Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

async function tgReq(path, params) {
    let resp = await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/"
        + path + "?" + encodeGetParams(params), {
        method: "GET",
        body: null
    });
    return await resp.json();
}

async function handleRequest(request) {
    let cache = await caches.open("studentiunimi-profile-pictures");
    let cachedResp = await cache.match(request);
    if (cachedResp !== null && cachedResp !== undefined) {
        return cachedResp;
    }

    const {searchParams} = new URL(request.url);
    let userID = searchParams.get("user_id");
    if (!userID || userID === "")
        return new Response(JSON.stringify({ok: false, error: "No user_id specified"}), {status: 400});

    try {
        let profilePictures = await tgReq("getUserProfilePhotos", {"user_id": userID});
        if (profilePictures.result.total_count < 1) {
            return new Response(null, {status: 204})
        }

        let latestPictureId = profilePictures.result.photos.shift().shift().file_id;
        let file = await tgReq("getFile", { "file_id": latestPictureId });
        let photo = await fetch("https://api.telegram.org/file/bot" + BOT_TOKEN + "/" + file.result.file_path);
        let resp = new Response(photo.body, {status: 200});
        await cache.put(request, resp.clone());
        return resp;
    } catch (error) {
        return new Response(JSON.stringify({ok: false, error: "Bad user_id" + error.toString()}), {status: 403});
    }
}
