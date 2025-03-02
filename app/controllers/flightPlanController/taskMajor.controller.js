const db = require("../../models/index.js");
const TaskMajor = db.taskMajor;
const genericController = require('../genericController.js');
const taskMajorController = genericController(TaskMajor, [], ['taskId', 'majorId']);
module.exports = taskMajorController;