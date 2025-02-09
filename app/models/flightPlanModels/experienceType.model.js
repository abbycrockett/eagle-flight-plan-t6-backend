module.exports = (sequelize, Sequelize) => {
    const ExperienceType = sequelize.define("experienceType", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: Sequelize.ENUM('academic', 'leadership', 'networking', "strengths", "career_prep", "mentoring", "volunteer", ""),
            allowNull: false,
            defaultValue: 'academic',
        },
        type: {
            type: Sequelize.ENUM('automatic', 'manual'), //for adding to flight plan
            allowNull: false,
            defaultValue: 'automatic',
        },
        req_reflection: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        schedule_type: {
            type: Sequelize.ENUM('one_time', 'every_semester', 'special_event'),
            allowNull: false,
            defaultValue: 'one_time',
        },
        name: {
            type: Sequelize.STRING, 
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING, 
            allowNull: false,
        },
        rational: {
            type: Sequelize.STRING, 
            allowNull: false,
        },
    });
    return ExperienceType;
};