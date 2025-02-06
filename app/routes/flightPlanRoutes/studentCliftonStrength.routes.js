const genericRouter = require('./genericRouter');
const studentCliftonStrengthController = require()

const router = genericRouter(studentCliftonStrengthController, [
    { name: "student", key: "studentId"},
    { name: "cliftonStrength", key: "cliftonStrengthId" }
]);

module.exports = router;