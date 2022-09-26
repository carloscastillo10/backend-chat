class MessageController {
    addMessage(user, message) {
        return new Promise((resolve, reject) => {
            if(!user || !message){
                return reject('Los datos son incorrectos');
            }
            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            };
            resolve(fullMessage);
        })

    }
}

module.exports = MessageController;
