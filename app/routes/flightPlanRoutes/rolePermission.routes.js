const genericRouter = require('./genericRouter');
const rolePermissionController = require('../../controllers/flightPlanController/rolePermission.controller.js');

const router = genericRouter(rolePermissionController, [
    { name: "role", key: "roleId" },
    { name: "permission", key: "permissionId" }
]);

module.exports = router;