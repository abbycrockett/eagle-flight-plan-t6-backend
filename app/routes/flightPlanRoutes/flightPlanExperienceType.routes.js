module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const flightPlanExperienceTypeController = require('../../controllers/flightPlanController/flightPlanExperienceType.controller.js');

    const router = genericRouter(flightPlanExperienceTypeController, [
        { name: "flightPlan", key: "flightPlanId" },
        { name: "experienceType", key: "experienceTypeId" }
    ], "flightPlanExperienceType");

    app.use("/flightPlan-t6", router);
};