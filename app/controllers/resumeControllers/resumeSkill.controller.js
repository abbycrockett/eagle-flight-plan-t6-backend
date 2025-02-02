
const db = require("../../models/index.js");
const ResumeSkill = db.resumeSkill;
const genericController = require('../genericController.js');
const ResumeSkillController = genericController(ResumeSkill, [], ['resumeId', 'skillId']);
module.exports = ResumeSkillController;