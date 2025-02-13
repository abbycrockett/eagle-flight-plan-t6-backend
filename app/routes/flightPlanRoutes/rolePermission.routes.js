module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const rolePermissionController = require('../../controllers/flightPlanController/rolePermission.controller.js');

    const router = genericRouter(rolePermissionController, [
        { name: "role", key: "roleId" },
        { name: "permission", key: "permissionId" }
    ]);

    app.use("/flightPlan-t6", router);
};