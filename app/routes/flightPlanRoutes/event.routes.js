const genericRouter = require('./genericRouter');
const eventController = require('../../controllers/flightPlanController/event.controller.js');

const router = genericRouter(eventController, []);

module.exports = router;