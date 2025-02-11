const genericRouter = require('../genericRoutes.js');
const studentCliftonStrengthController = require('../../controllers/flightPlanController/studentCliftonStrength.controller.js');

const router = genericRouter(studentCliftonStrengthController, [
    { name: "student", key: "studentId"},
    { name: "cliftonStrength", key: "cliftonStrengthId" }
]);

module.exports = router;