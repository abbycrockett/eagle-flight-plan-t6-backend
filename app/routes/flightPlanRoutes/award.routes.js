const genericRouter = require('../genericRoutes.js');
const awardController = require('../../controllers/flightPlanController/award.controller.js');

const router = genericRouter(awardController, []);

module.exports = router;