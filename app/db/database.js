const database = require('mongoose');

database.Promise = global.Promise;

async function connect(url) {
    await database.connect(url, {
        useNewUrlParser: true,
    });
}

module.exports = connect;
