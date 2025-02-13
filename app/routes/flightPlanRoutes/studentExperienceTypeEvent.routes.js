module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentExperienceTypeEventController = require('../../controllers/flightPlanController/studentExperienceTypeEvent.controller.js');

    const router = genericRouter(studentExperienceTypeEventController, [
        { name: "studentExperienceType", key: "studentExperienceTypeId" },
        { name: "event", key: "eventId" },
        { user: "user", key: "userId" }
    ], "studentExperienceTypeEvent");

    app.use("/flightPlan-t6", router);
};