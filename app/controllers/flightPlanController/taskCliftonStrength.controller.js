const db = require("../../models/index.js");
const TaskCliftonStrength = db.taskCliftonStrength;
const genericController = require('../genericController.js');
const taskCliftonStrengthController = genericController(TaskCliftonStrength);
module.exports = taskCliftonStrengthController;