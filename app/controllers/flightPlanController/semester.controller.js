const db = require("../../models/index.js");
const Semester = db.semester;
const genericController = require('../genericController.js');
const semesterController = genericController(Semester);
module.exports = semesterController;