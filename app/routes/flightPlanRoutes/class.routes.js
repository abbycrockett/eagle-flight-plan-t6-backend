const genericRouter = require('./genericRouter');
const classController = require('../../controllers/flightPlanController/class.controller.js');

const router = genericRouter(classController, []);

module.exports = router;