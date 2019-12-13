# Telgram Bot Notifier
**Telgram Bot Notifier** is a simple backend app which send messages to any user in private chat wit the bot.

## Stack
The Open Source MVP is built with:
* Node.js
* Express.js
* Telegraf.js
* MongoDB & Mongoose

## Installation
Just clone the repo and go in terminal:

```shell
npm i
```

Setup `.env` file by the example:
```env
TOKEN=''
APP_URL='https://your.app.com'
WEBHOOK='/path/to/webhook'
MONGODB=''
PORT=5000
```

For running the app use `npm start`

## Plans
* TypeScript migration
* Commands for blocking notifications
* Inline mode for managing notifiers
* Ability to send media files
* Third-party access using public API via private auth token
* i18n setup
