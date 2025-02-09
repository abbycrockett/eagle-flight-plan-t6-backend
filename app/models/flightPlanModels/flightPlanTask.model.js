module.exports = (sequelize, Sequelize) => {
    const FlightPlanTask = sequelize.define("flightPlanTask", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return FlightPlanTask;
};