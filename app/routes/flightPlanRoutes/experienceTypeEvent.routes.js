module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const experienceTypeEventController = require('../../controllers/flightPlanController/experienceTypeEvent.controller.js');

    const router = genericRouter(experienceTypeEventController, [
        { name: "experienceType", key: "experienceTypeId" },
        { name: "event", key: "eventId" }
    ], "experienceTypeEvent");

    app.use("/flightPlan-t6", router);
};