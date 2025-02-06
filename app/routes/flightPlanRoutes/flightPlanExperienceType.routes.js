const genericRouter = require('./genericRouter');
const flightPlanExperienceTypeController = require()

const router = genericRouter(flightPlanExperienceTypeController, [
    { name: "flightPlan", key: "flightPlanId" },
    { name: "experienceType", key: "experienceTypeId" }
]);

module.exports = router;