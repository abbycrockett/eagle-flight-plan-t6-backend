const db = require("../../models/index.js");
const ExperienceTypeEvent = db.experienceTypeEvent;
const genericController = require('../genericController.js');
const experienceTypeEventController = genericController(ExperienceTypeEvent);
module.exports = experienceTypeEventController;