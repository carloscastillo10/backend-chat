const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const messageSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: Date,
});

const MessageModel = mongoose.model('Message', messageSchema);

module.exports = MessageModel;
