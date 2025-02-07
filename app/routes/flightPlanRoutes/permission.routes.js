const genericRouter = require('./genericRouter');
const permissionController = require('../../controllers/flightPlanController/permission.controller.js');

const router = genericRouter(permissionController, []);

module.exports = router;