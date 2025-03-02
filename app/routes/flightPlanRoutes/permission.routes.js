module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const permissionController = require('../../controllers/flightPlanController/permission.controller.js');

    const router = genericRouter(permissionController, [], "permission");

    app.use("/flightPlan-t6", router);
};