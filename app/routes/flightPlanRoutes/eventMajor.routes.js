module.exports = (app) => {
  const genericRouter = require("../genericRoutes.js");
  const eventMajorController = require("../../controllers/flightPlanController/eventMajor.controller.js");

  const router = genericRouter(
    eventMajorController,
    [
      { name: "event", key: "eventId" },
      { name: "major", key: "majorId" },
    ],
    "eventMajor"
  );

    // List of majors by event id
  router.get("/event/:eventId/majors", eventMajorController.findMajorsByEventId);

  // List of events by major id
  router.get("/major/:majorId/events", eventMajorController.findEventsByMajorId);

  app.use("/flightPlan-t6", router);
};
