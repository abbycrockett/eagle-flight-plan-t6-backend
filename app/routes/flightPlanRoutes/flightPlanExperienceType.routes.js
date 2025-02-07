const genericRouter = require('./genericRouter');
const flightPlanExperienceTypeController = require('../../controllers/flightPlanController/flightPlanExperienceType.controller.js');

const router = genericRouter(flightPlanExperienceTypeController, [
    { name: "flightPlan", key: "flightPlanId" },
    { name: "experienceType", key: "experienceTypeId" }
]);

module.exports = router;