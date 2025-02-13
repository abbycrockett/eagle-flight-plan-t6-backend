module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const taskCliftonStrengthController = require('../../controllers/flightPlanController/taskCliftonStrength.controller.js');

    const router = genericRouter(taskCliftonStrengthController, [
        { name: "task", key: "taskId" },
        { name: "cliftonStrength", key: "cliftonStrengthId" }
    ], "taskCliftonStrength");

    app.use("/flightPlan-t6", router);
};