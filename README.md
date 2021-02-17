# Serverless functions for StudentiUnimi 
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/StudentiUnimi/serverless)

Questa repository raccoglie le __funzioni serverless__ utilizzate dai servizi di StudentiUnimi.
Sono deployate regolarmente su [Cloudflare Workers](https://workers.cloudflare.com) per via 
del generoso piano gratuito offerto.

## Funzioni deployate

- [groups-propics](https://github.com/StudentiUnimi/serverless/tree/master/groups-propics) - 
utilizzando la [Telegram Bots API](https://core.telegram.org/bots/api) e un bot di servizio 
  ritorna la foto di profilo di un gruppo del network dato un chat_id o un username.
- [users-propics](https://github.com/StudentiUnimi/serverless/tree/master/users-propics) - 
utilizzando la [Telegram Bots API](https://core.telegram.org/bots/api) e un bot di servizio
  ritorna la foto di profilo di un admin del network dato un user_id.
