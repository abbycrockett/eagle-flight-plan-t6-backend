module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentExperienceTypeController = require('../../controllers/flightPlanController/studentExperienceType.controller.js');

    const router = genericRouter(studentExperienceTypeController, [
        { name: "student", key: "studentId" },
        { name: "experienceType", key: "experienceTypeId" }
    ]);

    app.use("/flightPlan-t6", router);
};