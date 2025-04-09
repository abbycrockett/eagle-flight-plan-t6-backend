module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentFlightPlanExperienceTypeController = require('../../controllers/flightPlanController/studentFlightPlanExperienceType.controller.js');

    const router = genericRouter(studentFlightPlanExperienceTypeController, [
        { name: "studentFlightPlan", key: "studentFlightPlanId" },
        { name: "experienceType", key: "experienceTypeId" }
    ], "studentFlightPlanExperienceType");

    app.use("/flightPlan-t6", router);
};