const db = require("../../models/index.js");
const StudentFlightPlanExperienceType = db.studentFlightPlanExperienceType;
const genericController = require('../genericController.js');
const studentFlightPlanExperienceTypeController = genericController(StudentFlightPlanExperienceType, [], ['studentFlightPlanId', 'experienceTypeId']);
module.exports = studentFlightPlanExperienceTypeController;