module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const experienceTypeCliftonStrengthController = require('../../controllers/flightPlanController/experienceTypeCliftonStrength.controller.js');

    const router = genericRouter(experienceTypeCliftonStrengthController, [
        { name: "experienceType", key: "experienceTypeId" },
        { name: "cliftonStrength", key: "cliftonStrengthId" }
    ], "experienceTypeCliftonStrength");

    app.use("/flightPlan-t6", router);
};