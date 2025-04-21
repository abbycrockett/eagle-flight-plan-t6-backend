const db = require("../../models/index.js");
const Student = db.student;
const Event = db.event;
const StudentMajor = db.studentMajor;
const StudentCliftonStrength = db.studentCliftonStrength;
const EventMajor = db.eventMajor;
const EventCliftonStrength = db.eventCliftonStrength;
const StudentEvent = db.studentEvent;
const Major = db.major;
const CliftonStrength = db.cliftonStrength;
const genericController = require("../genericController.js");
const studentController = genericController(Student);

studentController.findRecommendedEvents = async (req, res) => {
  try {
    const studentId = req.params.id;

    const studentMajors = await StudentMajor.findAll({
      where: { studentId },
      attributes: ["majorId"],
    });
    const majorIds = studentMajors.map((major) => major.majorId);

    const studentStrengths = await StudentCliftonStrength.findAll({
      where: { studentId },
      attributes: ["cliftonStrengthId"],
    });
    const strengthIds = studentStrengths.map(
      (strength) => strength.cliftonStrengthId
    );

    const allMajor = await Major.findOne({
      where: { name: "All" },
    });
    const allStrength = await CliftonStrength.findOne({
      where: { name: "All" },
    });

    const allMajorId = allMajor ? allMajor.id : null;
    const allStrengthId = allStrength ? allStrength.id : null;

    if (allMajorId) majorIds.push(allMajorId);
    if (allStrengthId) strengthIds.push(allStrengthId);

    const events = await Event.findAll({
      include: [
        {
          model: EventMajor,
          as: "eventMajor",
          where: { majorId: majorIds },
          required: false,
        },
        {
          model: EventCliftonStrength,
          as: "eventCliftonStrength",
          where: { cliftonStrengthId: strengthIds },
          required: false,
        },
      ],
      where: {
        [db.Sequelize.Op.or]: [
          { "$eventMajor.majorId$": { [db.Sequelize.Op.in]: majorIds } },
          {
            "$eventCliftonStrength.cliftonStrengthId$": {
              [db.Sequelize.Op.in]: strengthIds,
            },
          },
        ],
      },
    });

    res.send(events);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while retrieving matching events.",
    });
  }
};

studentController.findRegisteredEvents = async (req, res) => {
  try {
    const studentId = req.params.id;

    const studentEvents = await StudentEvent.findAll({
      where: { studentId },
      attributes: ["eventId"],
    });
    const eventIds = studentEvents.map((event) => event.eventId);

    const events = await Event.findAll({
      where: { id: eventIds },
    });

    res.send(events);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while retrieving registered events.",
    });
  }
};

studentController.getStudentByStudentId = async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const student = await Student.findOne({
      where: { student_issued_id: studentId },
    });

    res.send(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = studentController;
