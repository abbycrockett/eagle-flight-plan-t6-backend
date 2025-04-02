const db = require("../../models/index.js");
const QuizResult = db.quizResult;
const Op = db.Sequelize.Op;

// Save a new quiz result from Google Apps Script
exports.create = (req, res) => {
  if (!req.body.email || !req.body.formId || typeof req.body.score !== "number" || !req.body.status) {
    res.status(400).send({
      message: "Invalid data format!",
    });
    return;
  }

  const quizResult = {
    email: req.body.email,
    formId: req.body.formId,
    score: req.body.score,
    status: req.body.status,
  };

  QuizResult.create(quizResult)
    .then((data) => {
      res.send({ success: true, message: "Quiz result stored.", data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the quiz result.",
      });
    });
};

// Retrieve all quiz results
exports.findAll = (req, res) => {
  QuizResult.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving quiz results.",
      });
    });
};
