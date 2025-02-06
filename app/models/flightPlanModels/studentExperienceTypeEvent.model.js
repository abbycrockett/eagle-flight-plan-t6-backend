module.exports = (sequelize, Sequelize) => {
    const StudentExperienceTypeEvent = sequelize.define("studentExperienceTypeEvent", {
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
        reflection_text: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.ENUM('academic', 'leadership',),
            allowNull: false,
            defaultValue: 'automatic',
        },
    });
    return StudentExperienceTypeEvent;
};