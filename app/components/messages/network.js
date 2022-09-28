const MessageController = require('./controller');
const response = require('../../network/response');
const express = require('express');
const multer = require('multer');

const controller = new MessageController();
const router = express.Router();
const uploadMiddelware = multer({
    dest: 'public/files/',
})


router.get('/', (req, res) => {
    const chatId = req.query.chat || null;
    controller
        .getMessages(chatId)
        .then((messages) => {
            response.success(req, res, messages, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.post('/', uploadMiddelware.single('file'), (req, res) => {
    controller
        .addMessage(req.body.chat, req.body.user, req.body.text, req.file)
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
