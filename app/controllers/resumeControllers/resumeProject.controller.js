
const db = require("../../models/index.js");
const ResumeProject = db.resumeProject;
const genericController = require('../genericController.js');
const ResumeProjectController = genericController(ResumeProject, [], ['resumeId', 'projectId']);
module.exports = ResumeProjectController;