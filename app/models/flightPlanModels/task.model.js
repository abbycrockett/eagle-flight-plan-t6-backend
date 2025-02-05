module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: Sequelize.ENUM,
            values: ['Academic', 'Leadership', 'Networking', 'Strengths', 'Career Prep', 'Mentoring', 'Volunteer', 'Other'],
            allowNull: false,
        },
        type: {
            type: Sequelize.ENUM,
            //Type (Automatic or Manual addition to Flight Plan)
            values: ['Automatic', 'Semi-Automatic', 'Manual'],
            allowNull: false,
        },
        reflection_required: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        reflection: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        schedule_type: {
            type: Sequelize.ENUM,
            // Scheduling type (one time, semesterly, special event, etc.)
            values: ['One Time', 'Semesterly', 'Special Event', 'Other'],
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rationale: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        semester_from_grad: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        // Competition types (automatic, self-reported, confirmed by OC employee)
        completion_type: {
            type: Sequelize.ENUM,
            values: ['Automatic', 'Self-Reported', 'Confirmed by OC employee'],
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