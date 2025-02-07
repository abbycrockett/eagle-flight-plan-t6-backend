const genericRouter = require('./genericRouter');
const flightPlanTaskController = require('../../controllers/flightPlanController/flightPlanTask.controller.js');

const router = genericRouter(flightPlanTaskController, [
    { name: "flightPlan", key: "flightPlanId" },
    { name: "task", key: "taskId" }
]);

module.exports = router;