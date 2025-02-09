const db = require("../../models/index.js");
const Event = db.event;
const genericController = require('../genericController.js');
const eventController = genericController(Event);
module.exports = eventController;