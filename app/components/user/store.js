
const UserModel = require('./model');

class UserStore {
    async add(name) {
        const user = new UserModel(name);
        return await user.save(); // Return Promise
    }

    async list() {
        return await UserModel.find();
    }

    // async update(id, text) {
    //     const message = await UserModel.findOne({
    //         _id: id,
    //     });
    //     message.text = text;
    //     const newMessage = await message.save();
    //     return newMessage;
    // }

    // delete(id) {
    //     return UserModel.deleteOne({
    //         _id: id
    //     })
    // }
}

module.exports = UserStore;
