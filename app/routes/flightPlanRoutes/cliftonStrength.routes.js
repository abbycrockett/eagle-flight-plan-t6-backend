module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const cliftonStrengthController = require('../../controllers/flightPlanController/cliftonStrength.controller.js');

    const router = genericRouter(cliftonStrengthController, []);

    app.use("/flightPlan-t6", router);
};