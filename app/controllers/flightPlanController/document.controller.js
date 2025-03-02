const db = require("../../models/index.js");
const Document = db.document;
const genericController = require('../genericController.js');
const DocumentController = genericController(Document, [], ['studentId']);
module.exports = DocumentController;