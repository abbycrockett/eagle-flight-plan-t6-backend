const db = require("../../models/index.js");
const StudentCliftonStrength = db.studentCliftonStrength;
const genericController = require('../genericController.js');
const studentCliftonStrengthController = genericController(StudentCliftonStrength);
module.exports = studentCliftonStrengthController;