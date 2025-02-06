const genericRouter = require('./genericRouter');
const studentClassController = require()

const router = genericRouter(studentClassController, [
    { name: "student", key: "studentId" },
    { name: "class", key: "classId" }
]);

module.exports = router;