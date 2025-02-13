const express = require('express');
// Authentication with Google Login (Tokens required to make a request to the backend)
const { authenticate } = require("../authorization/authorization.js"); 

const genericRouter = (controller, parentResources = []) => {
    const router = express.Router();

    // CRUD
    router.post('/', [authenticate], controller.create);
    router.get('/', [authenticate], controller.getAll);
    router.get('/:id', [authenticate], controller.getById);
    router.put('/:id', [authenticate], controller.update);
    router.delete('/:id', [authenticate], controller.delete);
    router.delete('/', [authenticate], controller.deleteAll);

    // Routes with foreign keys. Can handle multiple foreign keys
    if (parentResources.length > 0) {
        const nestedPath = parentResources.map(res => `/${res.name}/:${res.key}`).join('');

        router.post(`${nestedPath}`, [authenticate], controller.create);
        router.get(`${nestedPath}`, [authenticate], controller.getAll);
        router.get(`${nestedPath}/:id`, [authenticate], controller.getById);
        router.put(`${nestedPath}/:id`, [authenticate], controller.update);
        router.delete(`${nestedPath}`, [authenticate], controller.deleteAll);
        router.delete(`${nestedPath}/:id`, [authenticate], controller.delete);
    }

    return router;
};

module.exports = genericRouter;