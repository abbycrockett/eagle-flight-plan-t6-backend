const db = require("../../models/index.js");
const StudentExperienceType = db.studentExperienceType;
const genericController = require('../genericController.js');
const studentExperienceTypeController = genericController(StudentExperienceType);
module.exports = studentExperienceTypeController;