module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const badgeController = require('../../controllers/flightPlanController/badge.controller.js');
    const router = genericRouter(badgeController, []);

    app.use("/flightPlan-t6", router);
}