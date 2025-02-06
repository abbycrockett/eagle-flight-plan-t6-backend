const db = require("../../models/index.js");
const StudentBadge = db.studentBadge;
const genericController = require('../genericController.js');
const studentBadgeController = genericController(StudentBadge);
module.exports = studentBadgeController;