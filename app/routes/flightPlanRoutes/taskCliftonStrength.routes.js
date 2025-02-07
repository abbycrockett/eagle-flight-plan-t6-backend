const genericRouter = require('./genericRouter');
const taskCliftonStrengthController = require('../../controllers/flightPlanController/taskCliftonStrength.controller.js');

const router = genericRouter(taskCliftonStrengthController, [
    { name: "task", key: "taskId" },
    { name: "cliftonStrength", key: "cliftonStrengthId" }
]);

module.exports = router;