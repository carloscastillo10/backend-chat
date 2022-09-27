const MessageStore = require('./store');
class MessageController {
    constructor() {
        this.store = new MessageStore();
    }

    addMessage(user, text) {
        return new Promise((resolve, reject) => {
            if (!user || !text) {
                return reject('Invalid data');
            }
            const message = {
                user: user,
                text: text,
                date: new Date(),
            };
            this.store.add(message);
            resolve(message);
        });
    }

    getMessages(filterUser) {
        return new Promise((resolve, reject) => {
            this.store
                .list(filterUser)
                .then((messages) => {
                    resolve(messages);
                })
                .catch((error) => {
                    reject(error);
                });
        });
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
