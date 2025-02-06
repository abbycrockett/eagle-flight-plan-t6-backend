const genericRouter = require('./genericRouter');
const flightPlanTaskController = require()

const router = genericRouter(flightPlanTaskController, [
    { name: "flightPlan", key: "flightPlanId" },
    { name: "task", key: "taskId" }
]);

module.exports = router;