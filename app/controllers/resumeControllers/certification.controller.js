const db = require("../../models/index.js");
const Certification = db.certification;
const genericController = require('../genericController.js');
const certificationController = genericController(Certification, [], ['studentId']);
module.exports = certificationController;