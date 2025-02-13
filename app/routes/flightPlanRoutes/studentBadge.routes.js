module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const studentBadgeController = require('../../controllers/flightPlanController/studentBadge.controller.js');

    const router = genericRouter(studentBadgeController, [
        { name: "student", key: "studentId" },
        { name: "badge", key: "badgeId" }
    ], "studentBadge");

    app.use("/flightPlan-t6", router);
};