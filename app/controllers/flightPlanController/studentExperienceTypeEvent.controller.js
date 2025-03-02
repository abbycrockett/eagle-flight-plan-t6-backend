const db = require("../../models/index.js");
const StudentExperienceTypeEvent = db.studentExperienceTypeEvent;
const genericController = require('../genericController.js');
const studentExperienceTypeEventController = genericController(StudentExperienceTypeEvent, [], ['studentExperienceTypeId', 'eventId', 'userId']);
module.exports = studentExperienceTypeEventController;