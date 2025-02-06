module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        event_type: {
            type: Sequelize.ENUM('club', 'extra_curricular', 'career_fair', 'mentoring', 'career_services', 'lunch_and_learn', 'galup_strengths_class'),
            allowNull: false,
            defaultValue: 'career_services',
        },
        date: {
            type: Sequelize.DATETIME, 
            allowNull: false,
        },
        start_date_time: {
            type: Sequelize.DATETIME,
            allowNull: false,
        },
        end_date_time: {
            type: Sequelize.DATETIME,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING, 
            allowNull: false,
        },
        attendance_type: {
            type: Sequelize.ENUM('automatic', 'semi_automatic', 'manual'),
            allowNull: false,
            defaultValue: 'automatic',
        },
        registration: {
            type: Sequelize.ENUM('automatic', 'semi_automatic', 'manual'),
            allowNull: false,
            defaultValue: 'automatic',
        },
        completion_type: {
            type: Sequelize.ENUM('automatic', 'semi_automatic', 'manual'),
            allowNull: false,
            defaultValue: 'automatic',
        },
        custom: {
            type: Sequelize.BOOL,
            allowNull: false,
            defaultValue: false,
        },
        status: {
            type: Sequelize.ENUM('scheduled', 'in_progress', 'completed', 'finished'),
            allowNull: false,
            defaultValue: 'scheduled',
        },
        point_value: {
            type: Sequelize.INTEGER, 
            allowNull: false,
        },

    });
    return Education;
};