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

  app.use("/flightPlan-t6", router);
};
