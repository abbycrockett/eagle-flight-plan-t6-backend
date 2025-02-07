const genericRouter = require('./genericRouter');
const experienceTypeEventController = require('../../controllers/flightPlanController/experienceTypeEvent.controller.js');

const router = genericRouter(experienceTypeEventController, [
    { name: "experienceType", key: "experienceTypeId" },
    { name: "event", key: "eventId" }
]);

module.exports = router;