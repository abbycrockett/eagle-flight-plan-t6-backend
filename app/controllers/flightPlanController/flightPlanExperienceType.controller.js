const db = require("../../models/index.js");
const FlightPlanExperienceType = db.flightPlanExperienceType;
const genericController = require('../genericController.js');
const flightPlanExperienceTypeController = genericController(FlightPlanExperienceType);
module.exports = flightPlanExperienceTypeController;