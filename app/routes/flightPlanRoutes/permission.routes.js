const genericRouter = require('../genericRoutes.js');
const permissionController = require('../../controllers/flightPlanController/permission.controller.js');

const router = genericRouter(permissionController, []);

module.exports = router;