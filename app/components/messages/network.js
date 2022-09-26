const MessageController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new MessageController();
const router = express.Router();

router.get('/', (req, res) => {
    res.header({
        'Custom-header': 'Nuestro valor especificiado',
    });
    response.success(req, res, 'Lista de mensajes');
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
