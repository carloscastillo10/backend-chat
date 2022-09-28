const chatStore = require('./store');

class ChatController {
    constructor() {
        this.store = new chatStore();
    }

    addChat(users) {
        if (!users || !Array.isArray(users)) {
            return Promise.reject('Invalid data');
        }

        const chat = {
            users: users,
        };
        return this.store.add(chat);
    }

    getChats(userId) {
        return this.store.list(userId);
    }
}

module.exports = ChatController;
