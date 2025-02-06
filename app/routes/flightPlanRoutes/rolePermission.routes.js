const genericRouter = require('./genericRouter');
const rolePermissionController = require()

const router = genericRouter(rolePermissionController, [
    { name: "role", key: "roleId" },
    { name: "permission", key: "permissionId" }
]);

module.exports = router;