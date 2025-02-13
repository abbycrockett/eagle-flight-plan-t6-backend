module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const experienceTypeMajorController = require('../../controllers/flightPlanController/experienceTypeMajor.controller.js');

    const router = genericRouter(experienceTypeMajorController, [
        { name: "experienceType", key: "experienceTypeId" },
        { name: "event", key: "majorId" }
    ], "experienceTypeMajor");

    app.use("/flightPlan-t6", router);
};