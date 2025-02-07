const genericRouter = require('./genericRouter');
const verificationController = require('../../controllers/flightPlanController/verification.controller.js');

const router = genericRouter(verificationController, []);

module.exports = router;