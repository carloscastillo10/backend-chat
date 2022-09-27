const { config } = require('../../config/config');
const database = require('mongoose');
const MessageModel = require('./model');

database.Promise = global.Promise;
class MessageStore {
    constructor() {
        database.connect(config.dbUrl, {
            useNewUrlParser: true,
        });
    }
    add(text) {
        const newMessage = new MessageModel(text);
        newMessage.save();
    }

    async list(filterUser) {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
        const messages = await MessageModel.find(filter);
        return messages;
    }

    async update(id, text) {
        const message = await MessageModel.findOne({
            _id: id,
        });
        message.text = text;
        const newMessage = await message.save();
        return newMessage;
    }

    delete(id) {
        return MessageModel.deleteOne({
            _id: id
        })
    }
}

module.exports = MessageStore;
