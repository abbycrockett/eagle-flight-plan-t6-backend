const db = require("../../models/index.js");
const Project = db.project;
const genericController = require('../genericController.js');
const projectController = genericController(Project, [], ['studentId']);
module.exports = projectController;