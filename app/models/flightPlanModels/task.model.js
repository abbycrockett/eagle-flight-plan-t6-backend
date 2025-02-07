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
        type: {
            type: Sequelize.ENUM,
            //Type (Automatic or Manual addition to Flight Plan)
            values: ['automatic', 'semi_automatic', 'manual'],
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
        // Competition types (automatic, self-reported, confirmed by OC employee)
        completion_type: {
            type: Sequelize.ENUM,
            values: ['automatic', 'self_reported', 'confirmed_by_oc_employee'],
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