module.exports = (sequelize, Sequelize) => {
    const StudentExperienceType = sequelize.define("studentExperienceType", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return StudentExperienceType;
};