const genericRouter = require('./genericRouter');
const cliftonStrengthController = require('../../controllers/flightPlanController/cliftonStrength.controller.js');

const router = genericRouter(cliftonStrengthController, []);

module.exports = router;