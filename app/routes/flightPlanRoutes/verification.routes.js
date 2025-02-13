module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const verificationController = require('../../controllers/flightPlanController/verification.controller.js');

    const router = genericRouter(verificationController, [], "verification");

    app.use("/flightPlan-t6", router);
};