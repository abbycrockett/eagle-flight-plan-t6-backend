const db = require("../../models/index.js");
const EventCliftonStrength = db.eventCliftonStrength;
const genericController = require('../genericController.js');
const eventCliftonStrengthController = genericController(EventCliftonStrength, [], ['eventId', 'cliftonStrengthId']);
module.exports = eventCliftonStrengthController;