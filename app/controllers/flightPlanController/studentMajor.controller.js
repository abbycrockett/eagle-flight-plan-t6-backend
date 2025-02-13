const db = require("../../models/index.js");
const StudentMajor = db.studentMajor;
const genericController = require('../genericController.js');
const studentMajorController = genericController(StudentMajor, ['studentId', 'majorId']);
module.exports = studentMajorController;