module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const professorClassController = require('../../controllers/flightPlanController/professorClass.controller.js');

    const router = genericRouter(professorClassController, [
        { name: "user", key: "userId" },
        { name: "class", key: "classId" }
    ], "professorClass");

    app.use("/flightPlan-t6", router);
};