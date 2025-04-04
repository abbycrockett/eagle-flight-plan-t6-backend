const db = require("../../models/index.js");
const StudentEvent = db.studentEvent;
const Student = db.student;
const Event = db.event;
const Verification = db.verification;
const genericController = require("../genericController.js");

const studentEventController = genericController(
  StudentEvent,
  [],
  ["studentId", "eventId"]
);

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
      message: err.message || "Error occurred while retrieving students."
    });
  }
};

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
      message: err.message || "Error occurred while retrieving events."
    });
  }
};

studentEventController.findStudentEventByEventId = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const eventId = req.params.eventId;

    const studentEvent = await StudentEvent.findOne({
      where: {
        studentId: studentId,
        eventId: eventId
      },
      include: [{
        model: Event,
        as: 'event',
        include: [{
          model: Verification,
          as: 'verification'
        }]
      }]
    });

    if (!studentEvent) {
      return res.status(404).send({
        message: `No event found for student ${studentId} and event ${eventId}`
      });
    }

    res.send(studentEvent);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving the student event."
    });
  }
};

module.exports = studentEventController;
