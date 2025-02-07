const genericRouter = require('./genericRouter');
const studentExperienceTypeEventController = require('../../controllers/flightPlanController/studentExperienceTypeEvent.controller.js');

const router = genericRouter(studentExperienceTypeEventController, [
    { name: "studentExperienceType", key: "studentExperienceTypeId" },
    { name: "event", key: "eventId" },
    { user: "user", key: "userId" }
]);

module.exports = router;