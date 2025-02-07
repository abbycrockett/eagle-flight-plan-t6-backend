const genericRouter = require('./genericRouter');
const documentController = require('../../controllers/flightPlanController/document.controller.js');

const router = genericRouter(documentController, [ 
    { name: "student", key: "studentId" } 
]);

module.exports = router;