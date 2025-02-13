const express = require('express');
// Authentication with Google Login (Tokens required to make a request to the backend)
const { authenticate } = require("../authorization/authorization.js"); 

const genericRouter = (controller, parentResources = [], path) => {
    const router = express.Router();

    // CRUD
    router.post(`/${path}/`, [authenticate], controller.create);
    router.get(`/${path}/`, [authenticate], controller.getAll);
    router.get(`/${path}/:id`, [authenticate], controller.getById);
    router.put(`/${path}/:id`, [authenticate], controller.update);
    router.delete(`/${path}/:id`, [authenticate], controller.delete);
    router.delete(`/${path}/`, [authenticate], controller.deleteAll);

    // Routes with foreign keys. Can handle multiple foreign keys
    if (parentResources.length > 0) {
        const nestedPath = parentResources.map(res => `/${res.name}/:${res.key}`).join('');

        router.post(`${nestedPath}/${path}`, [authenticate], controller.create);
        router.get(`${nestedPath}/${path}`, [authenticate], controller.getAll);
        router.get(`${nestedPath}/${path}/:id`, [authenticate], controller.getById);
        router.put(`${nestedPath}/${path}/:id`, [authenticate], controller.update);
        router.delete(`${nestedPath}/${path}`, [authenticate], controller.deleteAll);
        router.delete(`${nestedPath}/${path}/:id`, [authenticate], controller.delete);
    }

    return router;
};

module.exports = genericRouter;