const db = require("../../models/index.js");
const Task = db.task;
const genericController = require('../genericController.js');
const taskController = genericController(Task, [], ['taskId', 'verificationId']);
module.exports = taskController;