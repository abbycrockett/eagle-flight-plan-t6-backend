const genericRouter = require('../genericRoutes.js');
const studentFlightPlanController = require('../../controllers/flightPlanController/studentFlightPlan.controller.js');

const router = genericRouter(studentFlightPlanController, [
    { name: "student", key: "studentId" },
    { name: "flightPlan", key: "flightPlanId" }
]);

module.exports = router;