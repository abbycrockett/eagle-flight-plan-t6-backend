module.exports = (sequelize, Sequelize) => {
    const StudentFlightPlan = sequelize.define("studentFlightPlan", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return StudentFlightPlan;
};