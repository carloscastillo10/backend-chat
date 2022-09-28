const MessageController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new MessageController();
const router = express.Router();

router.get('/', (req, res) => {
    const filterUser = req.query.user || null;
    controller
        .getMessages(filterUser)
        .then((messages) => {
            response.success(req, res, messages, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.post('/', (req, res) => {
    controller
        .addMessage(req.body.user, req.body.text)
        .then((message) => {
            response.success(req, res, message, 201);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.patch('/:id', (req, res) => {
    controller
        .updateMessage(req.params.id, req.body.text)
        .then((message) => {
            response.success(req, res, message, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.delete('/:id', (req, res) => {
    controller
        .deleteMessage(req.params.id)
        .then((result) => {
            response.success(req, res, result, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

module.exports = router;
