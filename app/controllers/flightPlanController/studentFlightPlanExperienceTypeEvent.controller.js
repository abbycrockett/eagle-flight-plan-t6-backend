const db = require("../../models/index.js");
const StudentFlightPlanExperienceTypeEvent = db.studentFlightPlanExperienceTypeEvent;
const genericController = require('../genericController.js');
const studentFlightPlanExperienceTypeEventController = genericController(StudentFlightPlanExperienceTypeEvent, [], ['studentFlightPlanExperienceTypeId', 'eventId', 'userId']);
module.exports = studentFlightPlanExperienceTypeEventController;