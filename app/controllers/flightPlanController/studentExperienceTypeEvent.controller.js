const db = require("../../models/index.js");
const StudentExperienceTypeEvent = db.studentExperienceTypeEvent;
const genericController = require('../genericController.js');
const studentExperienceTypeEventController = genericController(StudentExperienceTypeEvent);
module.exports = studentExperienceTypeEventController;