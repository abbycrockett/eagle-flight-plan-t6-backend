const db = require("../../models/index.js");
const TaskCliftonStrength = db.taskCliftonStrength;
const genericController = require('../genericController.js');
const taskCliftonStrengthController = genericController(TaskCliftonStrength, [], ['taskId', 'cliftonStrengthId']);
module.exports = taskCliftonStrengthController;