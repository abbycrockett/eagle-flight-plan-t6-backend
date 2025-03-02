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
            type: Sequelize.DATE,
            allowNull: true,
        },
        unapprove_reason: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.ENUM('in_progress', 'ready_for_review', 'unapproved', 'approved'),
            allowNull: false,
            defaultValue: 'in_progress',
        },
        reflection: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    });
    return StudentFlightPlanTask;
};