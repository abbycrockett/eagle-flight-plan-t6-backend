module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentClassController = require('../../controllers/flightPlanController/studentClass.controller.js');

    const router = genericRouter(studentClassController, [
        { name: "student", key: "studentId" },
        { name: "class", key: "classId" }
    ], "studentClass");

    app.use("/flightPlan-t6", router);
};