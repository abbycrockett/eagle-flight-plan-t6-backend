module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentFlightPlanTaskController = require('../../controllers/flightPlanController/studentFlightPlanTask.controller.js');

    const router = genericRouter(studentFlightPlanTaskController, [
        { name: "studentFlightPlan", key: "studentFlightPlanId" },
        { name: "task", key: "taskId" },
        { name: "user", key: "userId" }
    ], "studentFlightPlanTask");

    app.use("/flightPlan-t6", router);
};