module.exports = (sequelize, Sequelize) => {
    const StudentFlightPlanExperienceType = sequelize.define("studentFlightPlanExperienceType", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return StudentFlightPlanExperienceType;
};