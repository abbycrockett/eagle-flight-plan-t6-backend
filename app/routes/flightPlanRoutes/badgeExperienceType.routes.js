const genericRouter = require('../genericRoutes.js');
const badgeExperienceTypeController = require('../../controllers/flightPlanController/badgeExperienceType.controller.js');

const router = genericRouter(badgeExperienceTypeController, [
    { name: 'experienceType', key: 'experienceTypeId' },
    { name: 'badge', key: 'badgeId' }
]);

module.exports = router;