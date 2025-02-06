const genericRouter = require('./genericRouter');
const studentFlightPlanController = require()

const router = genericRouter(studentFlightPlanController, [
    { name: "student", key: "studentId" },
    { name: "flightPlan", key: "flightPlanId" }
]);

module.exports = router;