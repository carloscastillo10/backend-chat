
const MessageModel = require('./model');
class MessageStore {
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
