const User = require('../models/User');
const Telegram = require('telegraf/telegram');
const client = new Telegram(process.env.TOKEN, {
    webhookReply: true
});

module.exports = (req, res) => {
    User.find({username: req.body.username}, (err, user) => {
        if (err) return res.send(err);

        client.sendMessage(
            user[0].chatId,
            req.body.message
        );

        res.json({
            status: 'ok',
            body: req.body,
            user
        });
    });
};
