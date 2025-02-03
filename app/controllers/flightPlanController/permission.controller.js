const db = require("../../models/index.js");
const Permission = db.permission;
const genericController = require('../genericController.js');
const permissionController = genericController(Permission);
module.exports = permissionController;