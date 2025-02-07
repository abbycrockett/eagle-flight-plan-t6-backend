const db = require("../../models/index.js");
const ExperienceTypeMajor = db.experienceTypeMajor;
const genericController = require('../genericController.js');
const experienceTypeMajorController = genericController(ExperienceTypeMajor, [], ['experienceTypeId', 'majorId']);
module.exports = experienceTypeMajorController;