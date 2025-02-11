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
            type: Sequelize.DATE, 
            allowNull: false,
        },
        start_date_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        end_date_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING, 
            allowNull: false,
        },
        attendance_type: {
            type: Sequelize.ENUM('in_person', 'online'),
            allowNull: false,
            defaultValue: 'in_person',
        },
        registration: {
            type: Sequelize.ENUM('handshake', 'in_app'),
            allowNull: false,
            defaultValue: 'in_app',
        },
        custom: {
            type: Sequelize.BOOLEAN,
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
    return Event;
};