const db = require("../../models/index.js");
const Student = db.student;
const Event = db.event;
const StudentMajor = db.studentMajor;
const StudentCliftonStrength = db.studentCliftonStrength;
const EventMajor = db.eventMajor;
const EventCliftonStrength = db.eventCliftonStrength;
const StudentEvent = db.studentEvent;
const genericController = require('../genericController.js');
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
    const strengthIds = studentStrengths.map((strength) => strength.cliftonStrengthId);

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

module.exports = studentController;