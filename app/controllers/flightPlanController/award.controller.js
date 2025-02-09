const db = require("../../models/index.js");
const Award = db.award;
const genericController = require('../genericController.js');
const awardController = genericController(Award);
module.exports = awardController;