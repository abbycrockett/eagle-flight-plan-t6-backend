const db = require("../models");
const Link = db.link;
const genericController = require('./genericController.js');
const linkController = genericController(Link, [], ['studentId']);
module.exports = linkController;