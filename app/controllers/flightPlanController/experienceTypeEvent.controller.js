const db = require("../../models/index.js");
const ExperienceTypeEvent = db.experienceTypeEvent;
const genericController = require('../genericController.js');
const experienceTypeEventController = genericController(ExperienceTypeEvent, [], ['experienceTypeId', 'eventId']);
module.exports = experienceTypeEventController;