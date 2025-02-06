const db = require("../../models/index.js");
const TaskBadge = db.taskBadge;
const genericController = require('../genericController.js');
const taskBadgeController = genericController(TaskBadge);
module.exports = taskBadgeController;