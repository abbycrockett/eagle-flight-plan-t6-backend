module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("class", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            //userId
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Class;
};