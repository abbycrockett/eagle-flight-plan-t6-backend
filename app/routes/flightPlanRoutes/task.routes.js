module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const taskController = require('../../controllers/flightPlanController/task.controller.js');

    const router = genericRouter(taskController, [
        { name: "prerequisiteTask", key: "taskId" } // Self reference, prerequisiteTask is from the task table
    ]);

    app.use("/flightPlan-t6", router);
};