const db = require("../../models/index.js");
const EventMajor = db.eventMajor;
const genericController = require('../genericController.js');
const eventMajorController = genericController(EventMajor, [], ['eventId', 'majorId']);
module.exports = eventMajorController;