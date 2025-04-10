const db = require("../../models/index.js");
const QuizResult = db.quizResult;
const sse = require("../../utils/sse.js");

// Save a new quiz result from Google Apps Script, notify frontend once data is received
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
      // Notify all SSE clients
      sse.broadcast({
        type: "quizResult",
        payload: data,
      });

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

exports.delete = (req, res) => {
  const id = req.params.id;  // Extract ID from the URL parameters

  // Check if ID is provided
  if (!id) {
    return res.status(400).send({
      message: "ID is required to delete the quiz result",
    });
  }

  // Try to find and delete the quiz result by ID
  QuizResult.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num === 1) {
        res.send({ success: true, message: "Quiz result deleted successfully!" });
      } else {
        res.status(404).send({
          message: `No quiz result found with id: ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while deleting the quiz result.",
      });
    });
};