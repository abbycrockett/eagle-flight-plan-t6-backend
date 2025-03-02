const db = require("../../models/index.js");
const Class = db.class;
const genericController = require('../genericController.js');
const classController = genericController(Class, [], ['semesterId']);
module.exports = classController;