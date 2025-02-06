const genericRouter = require('./genericRouter');
const taskBadgeController = require()

const router = genericRouter(taskBadgeController, [
    { name: "task", key: "taskId" },
    { name: "badge", key: "badgeId" }
]);

module.exports = router;