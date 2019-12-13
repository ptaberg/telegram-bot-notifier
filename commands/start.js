const User = require('../models/User');

module.exports = (ctx) => {
    const user = new User({
        username: ctx.message.from.username,
        chatId: ctx.message.chat.id
    });

    user.save((err, data) => {
        if (err) return console.error(err);
        console.log(data);
    });

    ctx.reply(`Welcome, ${ctx.message.from.username || ''}`);
};
