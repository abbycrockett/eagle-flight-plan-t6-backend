module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const eventController = require('../../controllers/flightPlanController/event.controller.js');

    const router = genericRouter(eventController, [], "event");

    app.use("/flightPlan-t6", router);
};