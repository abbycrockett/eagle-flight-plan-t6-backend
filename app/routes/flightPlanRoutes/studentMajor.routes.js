module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
     studentMajorController = require('../../controllers/flightPlanController/studentMajor.controller.js');

    const router = genericRouter(studentMajorController, [
        { name: "student", key: "studentId" },
        { name: "major", key: "majorId" }
    ]);

    app.use("/flightPlan-t6", router);
};