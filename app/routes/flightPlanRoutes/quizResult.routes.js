module.exports = (app) => {
    const quizResult = require("../../controllers/flightPlanController/quizResult.controller.js");
    const router = require("express").Router();

    router.post('/quiz-results', quizResult.create);
    router.get('/quiz-results', quizResult.findAll);

    app.use("/flightPlan-t6", router);
}