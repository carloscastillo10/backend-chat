const express = require('express');
const messageRouter = require('../components/messages/network');
const userRouter = require('../components/user/network')

function routerApi (app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/messages', messageRouter);
    router.use('/users', userRouter);
}

module.exports = routerApi;
