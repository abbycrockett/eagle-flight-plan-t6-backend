const genericRouter = require('./genericRouter');
const userRolePermissionController = require('../../controllers/flightPlanController/userRolePermission.controller.js');

const router = genericRouter(userRolePermissionController, [
    { name: "userRole", key: "userRoleId" },
    { name: "permission", key: "permissionId" }
]);

module.exports = router;