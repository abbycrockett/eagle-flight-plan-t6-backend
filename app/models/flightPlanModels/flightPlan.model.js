module.exports = (sequelize, Sequelize) => {
    const FlightPlan = sequelize.define("flightPlan", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        semester: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        semester_from_graduation: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
    return FlightPlan;
};