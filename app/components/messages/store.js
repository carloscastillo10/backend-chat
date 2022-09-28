const MessageModel = require('./model');
class MessageStore {
    async add(text) {
        const message = new MessageModel(text);
        return await message.save(); // Return Promise
    }

    async list(chatId) {
        return new Promise((resolve, reject) => {
            let filter = {};
            if (chatId !== null) {
                filter = { chat: chatId };
            }
            MessageModel.find(filter)
                .populate('user')
                .exec((error, populated) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(populated);
                });
        });
    }

    async update(id, text) {
        const message = await MessageModel.findOne({
            _id: id,
        });
        message.text = text;
        return await message.save();
    }

    async delete(id) {
        return await MessageModel.deleteOne({
            _id: id,
        }); // Return promise
    }
}

module.exports = MessageStore;
