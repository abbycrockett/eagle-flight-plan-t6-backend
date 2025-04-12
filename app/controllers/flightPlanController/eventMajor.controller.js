const db = require("../../models/index.js");
const EventMajor = db.eventMajor;
const Major = db.major;
const Event = db.event;
const genericController = require('../genericController.js');
const eventMajorController = genericController(EventMajor, [], ['eventId', 'majorId']);

eventMajorController.findMajorsByEventId = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const majors = await Major.findAll({
      include: [
        {
          model: EventMajor,
          as: "eventMajor",
          where: { eventId: eventId },
          required: true,
        },
      ],
    });

    res.send(majors);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving majors.",
    });
  }
};

eventMajorController.findEventsByMajorId = async (req, res) => {
  try {
    const majorId = req.params.majorId;

    const events = await Event.findAll({
      include: [
        {
          model: EventMajor,
          as: "eventMajor",
          where: { majorId: majorId },
          required: true,
        },
      ],
    });

    res.send(events);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving events.",
    });
  }
};

eventMajorController.findAllByEventId = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const eventMajors = await EventMajor.findAll({
      where: { eventId: eventId }
    });

    res.send(eventMajors);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving event majors.",
    });
  }
};

module.exports = eventMajorController;