const db = require("../models");
const Certification = db.certification;
const genericController = require('./genericController.js');
const certificationController = genericController(Certification, [], ['studentId']);
module.exports = certificationController;