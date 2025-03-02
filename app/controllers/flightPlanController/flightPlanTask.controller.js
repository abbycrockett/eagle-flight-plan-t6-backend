const db = require("../../models/index.js");
const FlightPlanTask = db.flightPlanTask;
const genericController = require('../genericController.js');
const flightPlanTaskController = genericController(FlightPlanTask, [], ['flightPlanId', 'taskId']);
module.exports = flightPlanTaskController;