const genericRouter = require('./genericRouter');
const studentExperienceTypeEventController = require()

const router = genericRouter(studentExperienceTypeEventController, [
    { name: "studentExperienceType", key: "studentExperienceTypeId" },
    { name: "event", key: "eventId" },
    { user: "user", key: "userId" }
]);

module.exports = router;