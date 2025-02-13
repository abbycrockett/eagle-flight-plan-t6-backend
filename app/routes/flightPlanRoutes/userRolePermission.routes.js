module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const userRolePermissionController = require('../../controllers/flightPlanController/userRolePermission.controller.js');

    const router = genericRouter(userRolePermissionController, [
        { name: "userRole", key: "userRoleId" },
        { name: "permission", key: "permissionId" }
    ]);

    app.use("/flightPlan-t6", router);
};