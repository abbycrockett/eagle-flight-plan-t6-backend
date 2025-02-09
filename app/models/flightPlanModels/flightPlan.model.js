module.exports = (sequelize, Sequelize) => {
    const FlightPlan = sequelize.define("flightPlan", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return FlightPlan;
};