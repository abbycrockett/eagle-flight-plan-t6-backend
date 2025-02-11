const genericRouter = require('../genericRoutes.js');
const semesterController = require('../../controllers/flightPlanController/semester.controller.js');

const router = genericRouter(semesterController, []);

module.exports = router;