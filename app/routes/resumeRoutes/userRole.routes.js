module.exports = (app) => {
    const userRole = require("../../controllers/resumeControllers/userRole.controller.js");
    const { authenticate } = require("../../authorization/authorization.js");
    var router = require("express").Router();

    // Create new Course
    router.post("/user/:userId/userRole/", [authenticate], userRole.create);

    // Retrieve all Courses
    router.get("/userRole/", [authenticate], userRole.getAll);

    // Retrieve all Courses
    router.get("/user/:userId/userRole/", [authenticate], userRole.getAll);

    // Retreive a single Course with id
    router.get("/user/:userId/userRole/:id", [authenticate], userRole.getById);

    // Update a Course with id
    router.put("/user/:userId/userRole/:id", [authenticate], userRole.update);

    // Delete a course with id
    router.delete("/user/:userId/userRole/:id", [authenticate], userRole.delete);

    // Delete all Courses
    router.delete("/user/:userId/userRole/", [authenticate], userRole.deleteAll);

    app.use("/resume-t6", router);
};