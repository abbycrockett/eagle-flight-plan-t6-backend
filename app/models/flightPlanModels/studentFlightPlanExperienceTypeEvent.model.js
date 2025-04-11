module.exports = (sequelize, Sequelize) => {
    const StudentFlightPlanExperienceTypeEvent = sequelize.define("studentFlightPlanExperienceTypeEvent", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        points_earned: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        completed_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        unapprove_reason: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        reflection_text: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.ENUM('in_progress', 'ready_for_review', 'unapproved', 'approved'),
            allowNull: false,
            defaultValue: 'in_progress',
        },
        required_document: {
            type: Sequelize.BLOB("long"),
            allowNull: true,
        },
        required_document_type: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return StudentFlightPlanExperienceTypeEvent;
};