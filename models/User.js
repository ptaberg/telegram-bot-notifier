const {Schema, model} = require('mongoose');

const User = model('user', new Schema({
    username: String,
    chatId: String
}));

module.exports = User;
