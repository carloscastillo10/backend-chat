const MessageStore = require('./store');
class MessageController {
    constructor() {
        this.store = new MessageStore();
    }

    addMessage(user, message) {
        return new Promise((resolve, reject) => {
            if (!user || !message) {
                return reject('Los datos son incorrectos');
            }
            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            };
            this.store.add(fullMessage);
            resolve(fullMessage);
        });
    }

    getMessages() {
        return new Promise((resolve, reject) => {
            resolve(this.store.list());
        });
    }
}

module.exports = MessageController;
