module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const eventCliftonStrengthController = require('../../controllers/flightPlanController/eventCliftonStrength.controller.js');

    const router = genericRouter(eventCliftonStrengthController, [ 
        { name: "event", key: "eventId" },
        { name: "cliftonStrength", key: "cliftonStrengthId" }
    ]);

    app.use("/flightPlan-t6", router);
};