const genericRouter = require('../genericRoutes.js');
const studentMajorController = require('../../controllers/flightPlanController/studentMajor.controller.js');

const router = genericRouter(studentMajorController, [
    { name: "student", key: "studentId" },
    { name: "major", key: "majorId" }
]);

module.exports = router;