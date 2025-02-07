const genericRouter = require('./genericRouter');
const badgeController = require('../../controllers/flightPlanController/badge.controller.js');

const router = genericRouter(badgeController, []);

module.exports = router;