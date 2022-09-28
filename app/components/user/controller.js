const UserStore = require('./store');

class UserController {
    constructor() {
        this.store = new UserStore();
    }

    addUser(name) {
        if (!name) {
            return Promise.reject('Invalid data');
        }
        const user = {
            name,
        };
        return this.store.add(user);
    }

    getUsers() {
        return this.store.list();
    }
}

module.exports = UserController;
