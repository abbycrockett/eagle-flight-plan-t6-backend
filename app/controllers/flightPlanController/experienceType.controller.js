const db = require("../../models/index.js");
const ExperienceType = db.experienceType;
const genericController = require('../genericController.js');
const experienceTypeController = genericController(ExperienceType);
module.exports = experienceTypeController;