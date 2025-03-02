module.exports = (sequelize, Sequelize) => {
    const FlightPlanExperienceType = sequelize.define("flightPlanExperienceType", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return FlightPlanExperienceType;
};