const genericRouter = require('./genericRouter');
const studentMajorController = require()

const router = genericRouter(studentMajorController, [
    { name: "student", key: "studentId" },
    { name: "major", key: "majorId" }
]);

module.exports = router;