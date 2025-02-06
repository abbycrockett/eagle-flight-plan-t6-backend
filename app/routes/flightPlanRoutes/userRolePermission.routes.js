const genericRouter = require('./genericRouter');
const userRolePermissionController = require()

const router = genericRouter(userRolePermissionController, [
    { name: "userRole", key: "userRoleId" },
    { name: "permission", key: "permissionId" }
]);

module.exports = router;