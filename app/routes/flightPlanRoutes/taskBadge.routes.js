module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const taskBadgeController = require('../../controllers/flightPlanController/taskBadge.controller.js');

    const router = genericRouter(taskBadgeController, [
        { name: "task", key: "taskId" },
        { name: "badge", key: "badgeId" }
    ]);

    app.use("/flightPlan-t6", router);
};