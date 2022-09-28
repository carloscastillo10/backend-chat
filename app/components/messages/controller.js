const MessageStore = require('./store');
class MessageController {
    constructor() {
        this.store = new MessageStore();
    }

    addMessage(chat, user, text) {
        if (!chat || !user || !text) {
            return Promise.reject('Invalid data');
        }
        const message = {
            chat: chat,
            user: user,
            text: text,
            date: new Date(),
        };
        return this.store.add(message);
    }

    getMessages(chatId) {
        return this.store.list(chatId);
    }

    updateMessage(id, text) {
        return new Promise((resolve, reject) => {
            if (!id || !text) {
                return reject('Invalid data');
            }
            const result = this.store.update(id, text);
            resolve(result);
        });
    }

    deleteMessage(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                return reject('Invalid data');
            }
            this.store
                .delete(id)
                .then(() => {
                    resolve(`message ${id} deleted`);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

module.exports = MessageController;
