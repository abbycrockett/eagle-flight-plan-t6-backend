const genericRouter = require('./genericRouter');
const flightPlanController = require('../../controllers/flightPlanController/flightPlan.controller.js');

const router = genericRouter(flightPlanController, [
    { name: "semester", key: "semesterId" }
]);

module.exports = router;