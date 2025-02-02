
const db = require("../../models/index.js");
const ResumeLink = db.resumeLink;
const genericController = require('../genericController.js');
const ResumeLinkController = genericController(ResumeLink, [], ['resumeId', 'linkId']);
module.exports = ResumeLinkController;