module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentFlightPlanExperienceTypeEventController = require('../../controllers/flightPlanController/studentFlightPlanExperienceTypeEvent.controller.js');

    const router = genericRouter(studentFlightPlanExperienceTypeEventController, [
        { name: "studentFlightPlanExperienceType", key: "studentFlightPlanExperienceTypeId" },
        { name: "event", key: "eventId" },
        { user: "user", key: "userId" }
    ], "studentFlightPlanExperienceTypeEvent");

    app.use("/flightPlan-t6", router);
};