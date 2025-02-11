const genericRouter = require('../genericRoutes.js');
const cliftonStrengthController = require('../../controllers/flightPlanController/cliftonStrength.controller.js');

const router = genericRouter(cliftonStrengthController, []);

module.exports = router;