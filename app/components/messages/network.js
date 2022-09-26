const MessageController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new MessageController();
const router = express.Router();

router.get('/', (req, res) => {
    controller
        .getMessages()
        .then((messages) => {
            response.success(req, res, messages, 200);
        })
        .catch((error) => {
            response.error(req, res, error, 500);
        });
});

router.post('/', (req, res) => {
    controller
        .addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch((error) => {
            response.error(req, res, error, 400);
        });
});

module.exports = router;
