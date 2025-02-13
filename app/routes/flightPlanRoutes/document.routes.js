module.exports = (app) => {
    const genericRouter = require('../genericRoutes.js');
    const documentController = require('../../controllers/flightPlanController/document.controller.js');

    const router = genericRouter(documentController, [ 
        { name: "student", key: "studentId" } 
    ]);

    app.use("/flightPlan-t6", router);
};