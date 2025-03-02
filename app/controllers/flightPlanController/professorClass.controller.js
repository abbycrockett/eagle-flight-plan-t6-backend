const db = require("../../models/index.js");
const ProfessorClass = db.professorClass;
const genericController = require('../genericController.js');
const professorClassController = genericController(ProfessorClass, [], ['userId', 'classId']);
module.exports = professorClassController;