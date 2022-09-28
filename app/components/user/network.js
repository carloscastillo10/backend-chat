const UserController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new UserController();
const router = express.Router();

router.get('/', (req, res) => {
    controller
        .getUsers()
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.post('/', (req, res) => {
    controller
        .addUser(req.body.name)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

// router.patch('/:id', (req, res) => {
//     controller
//         .updateMessage(req.params.id, req.body.text)
//         .then((message) => {
//             response.success(req, res, message, 200);
//         })
//         .catch((error) => {
//             response.error(req, res, error.message, 500);
//         });
// });

// router.delete('/:id', (req, res) => {
//     controller
//         .deleteMessage(req.params.id)
//         .then((result) => {
//             response.success(req, res, result, 200);
//         })
//         .catch((error) => {
//             response.error(req, res, error.message, 500);
//         });
// });

module.exports = router;
