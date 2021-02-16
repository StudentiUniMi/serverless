# Serverless functions for StudentiUnimi
Questa repository raccoglie le __funzioni serverless__ utilizzate dai servizi di StudentiUnimi.
Sono deployate regolarmente su [Cloudflare Workers](https://workers.cloudflare.com) per via 
del generoso piano gratuito offerto.

## Funzioni deployate

- [group-propics](https://github.com/StudentiUnimi/serverless/tree/master/group-propics) - 
utilizzando la [Telegram Bots API](https://core.telegram.org/bots/api) e un bot di servizio 
  ritorna la foto di profilo di un gruppo del network dato un chat_id o un username.
