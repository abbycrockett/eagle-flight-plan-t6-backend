const genericRouter = require('./genericRouter');
const badgeExperienceTypeController = require()

const router = genericRouter(badgeExperienceTypeController, [
    { name: 'experienceType', key: 'experienceTypeId' },
    { name: 'badge', key: 'badgeId' }
]);

module.exports = router;