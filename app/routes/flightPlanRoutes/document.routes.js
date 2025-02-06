const genericRouter = require('./genericRouter');
const documentController = require()

const router = genericRouter(documentController, [ { name: "student", key: "studentId" } ]);

module.exports = router;