const db = require("../../models/index.js");
const StudentClass = db.studentClass;
const genericController = require('../genericController.js');
const studentClassController = genericController(StudentClass);
module.exports = studentClassController;