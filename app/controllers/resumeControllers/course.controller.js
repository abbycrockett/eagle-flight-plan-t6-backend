const db = require("../../models/index.js");
const Course = db.course;
const genericController = require('../genericController.js');
const courseController = genericController(Course, [], ['educationId', 'studentId']);
module.exports = courseController;