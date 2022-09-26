const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    res.header({
        'Custom-header': 'Nuestro valor especificiado',
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado exitosamente', 201);
    }
});

module.exports = router;
