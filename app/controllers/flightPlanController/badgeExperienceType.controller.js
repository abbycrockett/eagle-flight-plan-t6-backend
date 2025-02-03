const db = require("../../models/index.js");
const BadgeExperienceType = db.badgeExperienceType;
const genericController = require('../genericController.js');
const badgeExperienceTypeController = genericController(BadgeExperienceType);
module.exports = badgeExperienceTypeController;