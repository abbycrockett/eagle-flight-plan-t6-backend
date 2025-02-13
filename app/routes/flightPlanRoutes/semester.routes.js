module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const semesterController = require('../../controllers/flightPlanController/semester.controller.js');

    const router = genericRouter(semesterController, []);

    app.use("/flightPlan-t6", router);
};