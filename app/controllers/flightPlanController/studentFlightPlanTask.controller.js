const db = require("../../models/index.js");
const StudentFlightPlanTask = db.studentFlightPlanTask;
const genericController = require('../genericController.js');
const studentFlightPlanTaskController = genericController(StudentFlightPlanTask, [], ['studentFlightPlanId', 'taskId', 'userId']);
module.exports = studentFlightPlanTaskController;