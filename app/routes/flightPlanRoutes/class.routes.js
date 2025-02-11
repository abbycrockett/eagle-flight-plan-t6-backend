const genericRouter = require('../genericRoutes.js');
const classController = require('../../controllers/flightPlanController/class.controller.js');

const router = genericRouter(classController, [
    { name: "semester", key: "semesterId" }
]);

module.exports = router;