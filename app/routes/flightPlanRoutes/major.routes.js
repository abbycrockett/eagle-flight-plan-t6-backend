const genericRouter = require('./genericRouter');
const majorController = require('../../controllers/flightPlanController/major.controller.js');

const router = genericRouter(majorController, []);

module.exports = router;