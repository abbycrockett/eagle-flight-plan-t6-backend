const genericRouter = require('../genericRoutes.js');
const eventCliftonStrengthController = require('../../controllers/flightPlanController/eventCliftonStrength.controller.js');

const router = genericRouter(eventCliftonStrengthController, [ 
    { name: "event", key: "eventId" },
    { name: "cliftonStrength", key: "cliftonStrengthId" }
]);

module.exports = router;