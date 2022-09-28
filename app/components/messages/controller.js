const MessageStore = require('./store');
class MessageController {
    constructor() {
        this.store = new MessageStore();
    }

    addMessage(chat, user, text, file) {
        if (!chat || !user || !text) {
            return Promise.reject('Invalid data');
        }

        let fileUrl = '';
        if (file) {
            fileUrl = `http://localhost:3000/app/files/${file.filename}`;
        }

        const message = {
            chat: chat,
            user: user,
            text: text,
            date: new Date(),
            file: fileUrl,
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
