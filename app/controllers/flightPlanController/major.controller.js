const db = require("../../models/index.js");
const Major = db.major;
const genericController = require('../genericController.js');
const majorController = genericController(Major);
module.exports = majorController;