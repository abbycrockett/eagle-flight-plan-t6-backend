const db = require("../../models/index.js");
const Role = db.role;
const genericController = require('../genericController.js');
const roleController = genericController(Role);
module.exports = roleController;