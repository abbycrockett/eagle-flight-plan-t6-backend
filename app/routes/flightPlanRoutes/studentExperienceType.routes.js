const genericRouter = require('./genericRouter');
const studentExperienceTypeController = require('../../controllers/flightPlanController/studentExperienceType.controller.js');

const router = genericRouter(studentExperienceTypeController, [
    { name: "student", key: "studentId" },
    { name: "experienceType", key: "experienceTypeId" }
]);

module.exports = router;