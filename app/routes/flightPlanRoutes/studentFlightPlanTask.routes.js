const genericRouter = require('./genericRouter');
const studentFlightPlanTaskController = require()

const router = genericRouter(studentFlightPlanTaskController, [
    { name: "studentFlightPlan", key: "studentFlightPlanId" },
    { name: "task", key: "keyId" },
    { name: "user", key: "userId" }
]);

module.exports = router;