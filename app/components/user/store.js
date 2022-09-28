const UserModel = require('./model');

class UserStore {
    async add(name) {
        const user = new UserModel(name);
        return await user.save(); // Return Promise
    }

    async list() {
        return await UserModel.find();
    }
}

module.exports = UserStore;
