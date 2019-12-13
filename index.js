require('dotenv').config()
const app = require('express')();
const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const message = require('./controllers/message');
const start = require('./commands/start');
const { TOKEN, APP_URL, WEBHOOK, MONGODB, PORT } = process.env;
const bot = new Telegraf(TOKEN);

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (e) => console.error(e));

bot.telegram.setWebhook(`${APP_URL}${WEBHOOK}`);
app.use(bot.webhookCallback(WEBHOOK));
app.use(bodyParser.urlencoded({
  extended: true
}));

bot.start(start);

app.get('/', (req, res) => res.send('Hello World'));

app.post('/message', message);

app.listen(PORT || 5000, () => console.log(`Listening on ${PORT}`));
