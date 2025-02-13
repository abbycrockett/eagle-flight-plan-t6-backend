module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const flightPlanController = require('../../controllers/flightPlanController/flightPlan.controller.js');

    const router = genericRouter(flightPlanController, [
        { name: "semester", key: "semesterId" }
    ]);

    app.use("/flightPlan-t6", router);
};