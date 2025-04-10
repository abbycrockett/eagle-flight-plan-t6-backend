module.exports = (app) => {
    const quizResult = require("../../controllers/flightPlanController/quizResult.controller.js");
    const router = require("express").Router();
    const sse = require("../../utils/sse.js");

    router.post('/quiz-results', quizResult.create);
    router.get('/quiz-results', quizResult.findAll);
    router.delete("/quiz-results/:id", quizResult.delete);

    router.get("/quiz-results/events", (req, res) => {
        res.set({
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        });
        res.flushHeaders();
        sse.addClient(res);
      });

    app.use("/flightPlan-t6", router);
}