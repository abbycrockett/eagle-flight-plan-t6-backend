const db = require("../../models/index.js");
const StudentEvent = db.studentEvent;
const Student = db.student;
const Event = db.event;
const genericController = require("../genericController.js");

// Get the base controller
const studentEventController = genericController(
  StudentEvent,
  [],
  ["studentId", "eventId"]
);

// Add custom route to find students by event ID
studentEventController.findStudentsByEventId = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    
    const students = await Student.findAll({
      include: [{
        model: StudentEvent,
        as: 'studentEvent',
        where: { eventId: eventId },
        required: true
      }]
    });

    res.send(students);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving students."
    });
  }
};

// Add custom route to find events by student ID
studentEventController.findEventsByStudentId = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    
    const events = await Event.findAll({
      include: [{
        model: StudentEvent,
        as: 'studentEvent',
        where: { studentId: studentId },
        required: true
      }]
    });

    res.send(events);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving events."
    });
  }
};

module.exports = studentEventController;
