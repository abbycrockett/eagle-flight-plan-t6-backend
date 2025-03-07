module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentMajorController = require('../../controllers/flightPlanController/studentMajor.controller.js');

    const router = genericRouter(studentMajorController, [
        { name: "student", key: "studentId" },
        { name: "major", key: "majorId" }
    ], "studentMajor");

    app.use("/flightPlan-t6", router);
};