module.exports = (app) => {
  const genericRouter = require("../genericRoutes.js");
  const studentEventController = require("../../controllers/flightPlanController/studentEvent.controller.js");

  const router = genericRouter(
    studentEventController,
    [
      { name: "student", key: "studentId" },
      { name: "event", key: "eventId" },
    ],
    "studentEvent"
  );

  app.use("/flightPlan-t6", router);
};
