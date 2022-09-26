const messages = [];

class MessageStore {
    add(message) {
        messages.push(message);
    }

    list(){
        return messages;
    }
}

module.exports = MessageStore;
