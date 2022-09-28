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
        return this.store.list()
    }

    // updateMessage(id, text) {
    //     return new Promise((resolve, reject) => {
    //         if (!id || !text) {
    //             return reject('Invalid data');
    //         }
    //         const result = this.store.update(id, text);
    //         resolve(result);
    //     });
    // }

    // deleteMessage(id) {
    //     return new Promise((resolve, reject) => {
    //         if (!id) {
    //             return reject('Invalid data');
    //         }
    //         this.store
    //             .delete(id)
    //             .then(() => {
    //                 resolve(`message ${id} deleted`);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             });
    //     });
    // }
}

module.exports = UserController;
