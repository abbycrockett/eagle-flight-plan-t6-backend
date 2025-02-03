const db = require("../../models/index.js");
const RolePermission = db.rolepermission;
const genericController = require('../genericController.js');
const rolePermissionController = genericController(RolePermission);
module.exports = rolePermissionController;