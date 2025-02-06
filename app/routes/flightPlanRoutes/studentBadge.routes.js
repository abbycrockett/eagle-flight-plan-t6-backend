const genericRouter = require('./genericRouter');
const studentBadgeController = require()

const router = genericRouter(studentBadgeController, [
    { name: "student", key: "studentId" },
    { name: "badge", key: "badgeId" }
]);

module.exports = router;