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
            type: Sequelize.ENUM('inPerson', 'online'),
            allowNull: false,
            defaultValue: 'student',
        },
        redemption_info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
    });
    return Award;
};