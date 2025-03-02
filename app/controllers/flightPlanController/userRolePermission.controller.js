const db = require("../../models/index.js");
const UserRolePermission = db.userRolePermission;
const genericController = require('../genericController.js');
const userRolePermissionController = genericController(UserRolePermission, [], ['userRoleId', 'permissionId']);
module.exports = userRolePermissionController;