const db = require("../../models/index.js");
const StudentEvent = db.studentEvent;
const genericController = require("../genericController.js");
const studentEventController = genericController(
  StudentEvent,
  [],
  ["studentId", "eventId"]
);
module.exports = studentEventController;
