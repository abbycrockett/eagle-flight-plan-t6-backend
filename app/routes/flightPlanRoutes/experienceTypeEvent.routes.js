const genericRouter = require('./genericRouter');
const experienceTypeEventController = require()

const router = genericRouter(experienceTypeEventController, [
    { name: "experienceType", key: "experienceTypeId" },
    { name: "event", key: "eventId" }
]);

module.exports = router;