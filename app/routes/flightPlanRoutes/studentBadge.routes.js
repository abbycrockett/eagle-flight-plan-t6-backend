const genericRouter = require('./genericRouter');
const studentBadgeController = require('../../controllers/flightPlanController/studentBadge.controller.js');

const router = genericRouter(studentBadgeController, [
    { name: "student", key: "studentId" },
    { name: "badge", key: "badgeId" }
]);

module.exports = router;