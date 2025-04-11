const db = require("../../models/index.js");
const EventCliftonStrength = db.eventCliftonStrength;
const CliftonStrength = db.cliftonStrength;
const Event = db.event;
const genericController = require('../genericController.js');
const eventCliftonStrengthController = genericController(EventCliftonStrength, [], ['eventId', 'cliftonStrengthId']);

eventCliftonStrengthController.findCliftonStrengthsByEventId = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const cliftonStrengths = await CliftonStrength.findAll({
      include: [
        {
          model: EventCliftonStrength,
          as: "eventCliftonStrength",
          where: { eventId: eventId },
          required: true,
        },
      ],
    });

    res.send(cliftonStrengths);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving clifton strengths.",
    });
  }
};

eventCliftonStrengthController.findEventsByCliftonStrengthId = async (req, res) => {
  try {
    const cliftonStrengthId = req.params.cliftonStrengthId;

    const events = await Event.findAll({
      include: [
        {
          model: EventCliftonStrength,
          as: "eventCliftonStrength",
          where: { cliftonStrengthId: cliftonStrengthId },
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

eventCliftonStrengthController.findAllByEventId = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const eventCliftonStrengths = await EventCliftonStrength.findAll({
      where: { eventId: eventId }
    });

    res.send(eventCliftonStrengths);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving event clifton strengths.",
    });
  }
};

module.exports = eventCliftonStrengthController;