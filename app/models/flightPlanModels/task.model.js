module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: Sequelize.ENUM,
            values: ['academic', 'leadership', 'networking', 'strengths', 'career_prep', 'mentoring', 'volunteer', 'other'],
            allowNull: false,
        },
        reflection_required: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        reflection: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        schedule_type: {
            type: Sequelize.ENUM,
            // Scheduling type (one time, semesterly, special event, etc.)
            values: ['one_time', 'semesterly', 'special_event', 'other'],
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        rationale: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        semester_from_grad: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        point_value: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        prerequisite_task_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        video_link: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Task;
};