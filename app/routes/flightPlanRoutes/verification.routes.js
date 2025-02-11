const genericRouter = require('../genericRoutes.js');
const verificationController = require('../../controllers/flightPlanController/verification.controller.js');

const router = genericRouter(verificationController, []);

module.exports = router;