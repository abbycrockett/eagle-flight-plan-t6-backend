module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const awardController = require('../../controllers/flightPlanController/award.controller.js');
    const router = genericRouter(awardController, [], "award");

    app.use("/flightPlan-t6", router);
};