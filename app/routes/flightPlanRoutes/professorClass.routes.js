const genericRouter = require('./genericRouter');
const professorClassController = require('../../controllers/flightPlanController/professorClass.controller.js');

const router = genericRouter(professorClassController, [
    { name: "user", key: "userId" },
    { name: "class", key: "classId" }
]);

module.exports = router;