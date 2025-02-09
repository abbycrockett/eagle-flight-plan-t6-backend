module.exports = (sequelize, Sequelize) => {
    const Major = sequelize.define("major", {
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
        department: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Major;
};