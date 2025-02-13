module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const transactionController = require('../../controllers/flightPlanController/transaction.controller.js');

    const router = genericRouter(transactionController, [
        { name: "user", key: "userId" },
        { name: "student", key: "studentId" },
        { name: "award", key: "awardId" }
    ], "transaction");

    app.use("/flightPlan-t6", router);
};