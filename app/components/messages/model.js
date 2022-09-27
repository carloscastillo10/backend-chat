const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const messageSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: Date,
});

const MessageModel = mongoose.model('messages', messageSchema);

module.exports = MessageModel;
