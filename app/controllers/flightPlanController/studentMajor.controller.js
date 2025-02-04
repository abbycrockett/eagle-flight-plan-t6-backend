const db = require("../../models/index.js");
const StudentMajor = db.studentMajor;
const genericController = require('../genericController.js');
const studentMajorController = genericController(StudentMajor);
module.exports = studentMajorController;