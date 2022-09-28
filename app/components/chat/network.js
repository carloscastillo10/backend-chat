const ChatController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new ChatController();
const router = express.Router();

router.get('/:userId', (req, res) => {
    controller
        .getChats(req.params.userId)
        .then((chats) => {
            response.success(req, res, chats, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.post('/', (req, res) => {
    controller
        .addChat(req.body.users)
        .then((chat) => {
            response.success(req, res, chat, 201);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

module.exports = router;
