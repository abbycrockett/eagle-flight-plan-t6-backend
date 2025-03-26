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

  // Get list of students by event id
  router.get("/event/:eventId/students", studentEventController.findStudentsByEventId);

  // Get list of events by student id
  router.get("/student/:studentId/events", studentEventController.findEventsByStudentId);

  app.use("/flightPlan-t6", router);
};
