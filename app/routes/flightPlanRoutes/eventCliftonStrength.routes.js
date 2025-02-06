const genericRouter = require('./genericRouter');
const eventCliftonStrengthController = require()

const router = genericRouter(eventCliftonStrengthController, [ 
    { name: "event", key: "eventId" },
    { name: "cliftonStrength", key: "cliftonStrengthId" }
]);

module.exports = router;