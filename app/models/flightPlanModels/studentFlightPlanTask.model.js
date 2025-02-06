module.exports = (sequelize, Sequelize) => {
    const StudentFlightPlanTask = sequelize.define("studentFlightPlanTask", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        points_earned: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        completed_date: {
            type: Sequelize.DATETIME,
            allowNull: true,
        },
        unapprove_reason: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return StudentFlightPlanTask;
};