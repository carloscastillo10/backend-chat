const express = require('express');
const messageRouter = require('../components/messages/network');

function routerApi (app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/messages', messageRouter);
}

module.exports = routerApi;
