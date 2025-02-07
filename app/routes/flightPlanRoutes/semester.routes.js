const genericRouter = require('./genericRouter');
const semesterController = require('../../controllers/flightPlanController/semester.controller.js');

const router = genericRouter(semesterController, []);

module.exports = router;