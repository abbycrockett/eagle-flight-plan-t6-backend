const db = require("../../models/index.js");
const Badge = db.badge;
const genericController = require('../genericController.js');
const badgeController = genericController(Badge);
module.exports = badgeController;