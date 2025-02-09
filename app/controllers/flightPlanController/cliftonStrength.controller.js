const db = require("../../models/index.js");
const CliftonStrength = db.cliftonStrength;
const genericController = require('../genericController.js');
const cliftonStrengthController = genericController(CliftonStrength);
module.exports = cliftonStrengthController;