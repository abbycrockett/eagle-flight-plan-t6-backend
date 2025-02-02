
const db = require("../../models/index.js");
const ResumeCertification = db.resumeCertification;
const genericController = require('../genericController.js');
const ResumeCertificationController = genericController(ResumeCertification, [], ['resumeId', 'certificationId']);
module.exports = ResumeCertificationController;