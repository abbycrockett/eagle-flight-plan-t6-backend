module.exports = (sequelize, Sequelize) => {
    const StudentFlightPlan = sequelize.define("studentFlightPlan", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        semester_from_grad: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        completion_date: {
            type: Sequelize.DATE, 
            allowNull: true,
        }
    });
    return StudentFlightPlan;
};