
const db = require("../../models/index.js");
const ResumeInterest = db.resumeInterest;
const genericController = require('../genericController.js');
const ResumeInterestController = genericController(ResumeInterest, [], ['resumeId', 'interestId']);
module.exports = ResumeInterestController;