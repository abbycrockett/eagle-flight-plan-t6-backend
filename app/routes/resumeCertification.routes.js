module.exports = (app) => {
    const resumeCertification = require("../controllers/resumeCertification.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.get("/resume/:resumeId/resumeCertification/", [authenticate], resumeCertification.getAll);

    // Create new Course
    router.post("/resume/:resumeId/certification/:certificationId/resumeCertification/", [authenticate], resumeCertification.create);

    // Retrieve all Courses
    router.get("/resume/:resumeId/certification/:certificationId/resumeCertification/", [authenticate], resumeCertification.getAll);

    // Retreive a single Course with id
    router.get("/resume/:resumeId/certification/:certificationId/resumeCertification/:id", [authenticate], resumeCertification.getById);

    // Update a Course with id
    router.put("/resume/:resumeId/certification/:certificationId/resumeCertification/:id", [authenticate], resumeCertification.update);

    // Delete a course with id
    router.delete("/resume/:resumeId/certification/:certificationId/resumeCertification/:id", [authenticate], resumeCertification.delete);

    // Delete all Courses
    router.delete("/resume/:resumeId/resumeCertification/", [authenticate], resumeCertification.deleteAll);

    app.use("/resume-t6", router);
};