module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const eventCliftonStrengthController = require('../../controllers/flightPlanController/eventCliftonStrength.controller.js');

    const router = genericRouter(eventCliftonStrengthController, [ 
        { name: "event", key: "eventId" },
        { name: "cliftonStrength", key: "cliftonStrengthId" }
    ], "eventCliftonStrength");


    // List of clifton strengths by event id
    router.get("/event/:eventId/cliftonStrengths", eventCliftonStrengthController.findCliftonStrengthsByEventId);

    // List of events by clifton strength id
    router.get("/cliftonStrength/:cliftonStrengthId/events", eventCliftonStrengthController.findEventsByCliftonStrengthId);

    // list of event clifton strengths by event id
    router.get("/event/:eventId/eventCliftonStrengths", eventCliftonStrengthController.findAllByEventId);

    app.use("/flightPlan-t6", router);
};