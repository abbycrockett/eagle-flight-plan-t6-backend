const db = require("../../models/index.js");
const StudentFlightPlan = db.studentFlightPlan;
const genericController = require('../genericController.js');
const studentFlightPlanController = genericController(StudentFlightPlan);
module.exports = studentFlightPlanController;