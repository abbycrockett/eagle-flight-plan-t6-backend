const db = require("../../models/index.js");
const StudentBadge = db.studentBadge;
const genericController = require('../genericController.js');
const studentBadgeController = genericController(StudentBadge, [], ['studentId', 'badgeId']);
module.exports = studentBadgeController;