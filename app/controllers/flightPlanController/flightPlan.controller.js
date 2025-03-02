const db = require("../../models/index.js");
const FlightPlan = db.flightPlan;
const genericController = require('../genericController.js');
const flightPlan = genericController(FlightPlan, [], ['semesterId']);
module.exports = flightPlan;