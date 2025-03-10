module.exports = (sequelize, Sequelize) => {
    const Badge = sequelize.define("badge", {
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
            allowNull: true,
        },
        type: {
            type: Sequelize.ENUM,
            values: ['task_completion', 'experience_completion', 'flightplan_completion'],
            allowNull: true,
        },
        points: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB("long"),
            allowNull: true,
        },
        image_type: {
            type: Sequelize.STRING, // Image file type
            allowNull: true,
        },
    });
    return Badge;
};