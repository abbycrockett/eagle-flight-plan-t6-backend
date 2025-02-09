module.exports = (sequelize, Sequelize) => {
    const StudentCliftonStrength = sequelize.define("studentCliftonStrength", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // studentId
        // cliftonStrengthId
    });
    return StudentCliftonStrength;
};