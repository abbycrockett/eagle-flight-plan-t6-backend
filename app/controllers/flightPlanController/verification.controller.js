const db = require("../../models/index.js");
const Verification = db.verification;
const genericController = require('../genericController.js');
const verificationController = genericController(Verification);
module.exports = verificationController;