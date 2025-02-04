const db = require("../../models/index.js");
const Transaction = db.transaction;
const genericController = require('../genericController.js');
const transactionController = genericController(Transaction);
module.exports = transactionController;