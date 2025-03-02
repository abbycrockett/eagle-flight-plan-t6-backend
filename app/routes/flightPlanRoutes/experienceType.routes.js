module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const experienceTypeController = require('../../controllers/flightPlanController/experienceType.controller.js');

    const router = genericRouter(experienceTypeController, [], "experienceType");

    app.use("/flightPlan-t6", router);
};