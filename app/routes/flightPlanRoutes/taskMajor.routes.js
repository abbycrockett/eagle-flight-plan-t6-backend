const genericRouter = require('./genericRouter');
const taskMajorController = require()

const router = genericRouter(taskMajorController, [
    { name: "task", key: "taskId" },
    { name: "major", key: "majorId" }
]);

module.exports = router;