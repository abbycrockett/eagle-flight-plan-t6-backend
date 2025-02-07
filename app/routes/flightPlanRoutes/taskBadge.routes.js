const genericRouter = require('./genericRouter');
const taskBadgeController = require('../../controllers/flightPlanController/taskBadge.controller.js');

const router = genericRouter(taskBadgeController, [
    { name: "task", key: "taskId" },
    { name: "badge", key: "badgeId" }
]);

module.exports = router;