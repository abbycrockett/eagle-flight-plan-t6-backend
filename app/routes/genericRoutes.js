const express = require("express");
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

    // Routes with foreing keys
    if (parentResources.length > 0) {
        const basePath = parentResources.map(res => `/${res.name}/:${res.key}`).join('');

        router.post(`${basePath}/${path}`, [authenticate], controller.create);
        router.get(`${basePath}/${path}`, [authenticate], controller.getAll);
        router.get(`${basePath}/${path}/:id`, [authenticate], controller.getById);
        router.put(`${basePath}/${path}/:id`, [authenticate], controller.update);
        router.delete(`${basePath}/${path}`, [authenticate], controller.deleteAll);
        router.delete(`${basePath}/${path}/:id`, [authenticate], controller.delete);
        
        // For if you want to use only one of the foreing keys listed in the routes file
        parentResources.forEach((res) => {
            const partialPath = `/${res.name}/:${res.key}`;

            router.post(`${partialPath}/${path}`, [authenticate], controller.create);
            router.get(`${partialPath}/${path}`, [authenticate], controller.getAll);
            router.get(`${partialPath}/${path}/:id`, [authenticate], controller.getById);
            router.put(`${partialPath}/${path}/:id`, [authenticate], controller.update);
            router.delete(`${partialPath}/${path}`, [authenticate], controller.deleteAll);
            router.delete(`${partialPath}/${path}/:id`, [authenticate], controller.delete);
        });
    }

    return router;
};

module.exports = genericRouter;