module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const majorController = require('../../controllers/flightPlanController/major.controller.js');

    const router = genericRouter(majorController, []);

    app.use("/flightPlan-t6", router);
};