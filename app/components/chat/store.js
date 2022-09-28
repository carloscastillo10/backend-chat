const ChatModel = require('./model');

class ChatStore {
    async add(chat) {
        const newChat = new ChatModel(chat);
        return await newChat.save(); // Return Promise
    }

    async list(userId) {
        return new Promise((resolve, reject) => {
            let filter = {};
            if (userId) {
                filter = {
                    users: userId,
                };
            }

            ChatModel.find(filter)
                .populate('users')
                .exec((err, populated) => {
                    if (err) {
                        reject(err);
                        return false;
                    }
                    resolve(populated);
                });
        });
    }
}

module.exports = ChatStore;
