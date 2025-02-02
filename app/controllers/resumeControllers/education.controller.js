const db = require("../../models/index.js");
const Education = db.education;
const genericController = require('../genericController.js');
const educationController = genericController(Education, [], ['studentId']);
module.exports = educationController;