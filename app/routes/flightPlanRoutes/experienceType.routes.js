const genericRouter = require('../genericRoutes.js');
const experienceTypeController = require('../../controllers/flightPlanController/experienceType.controller.js');

const router = genericRouter(experienceTypeController, []);

module.exports = router;