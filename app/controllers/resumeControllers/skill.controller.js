const db = require("../../models/index.js");
const Skill = db.skill;
const genericController = require('../genericController.js');
const skillController = genericController(Skill, [], ['studentId']);
module.exports = skillController;