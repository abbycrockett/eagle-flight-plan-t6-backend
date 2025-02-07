const genericRouter = require('./genericRouter');
const transactionController = require('../../controllers/flightPlanController/transaction.controller.js');

const router = genericRouter(transactionController, [
    { name: "user", key: "userId" },
    { name: "student", key: "studentId" },
    { name: "award", key: "awardId" }
]);

module.exports = router;