const db = require("../../models/index.js");
const ExperienceTypeCliftonStrength = db.experienceTypeCliftonStrength;
const genericController = require('../genericController.js');
const experienceTypeCliftonStrengthController = genericController(ExperienceTypeCliftonStrength, [], ['taskId', 'cliftonStrengthId']);
module.exports = experienceTypeCliftonStrengthController;