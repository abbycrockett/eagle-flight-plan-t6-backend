const genericRouter = require('./genericRouter');
const taskController = require('../../controllers/flightPlanController/task.controller.js');

const router = genericRouter(taskController, [
    { name: "prerequisiteTask", key: "taskId" } // Self reference, prerequisiteTask is from the task table
]);

module.exports = router;