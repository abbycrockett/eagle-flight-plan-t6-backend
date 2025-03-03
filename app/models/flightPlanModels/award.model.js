module.exports = (sequelize, Sequelize) => {
    const Award = sequelize.define("award", {
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
        cost: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        redemption_type: {
            type: Sequelize.ENUM('in_person', 'online'),
            allowNull: false,
            defaultValue: 'in_person',
        },
        redemption_info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB("long"),
            allowNull: false,
        },
        image_type: {
            type: Sequelize.STRING, // Image file type
            allowNull: false,
        },
    });
    return Award;
};