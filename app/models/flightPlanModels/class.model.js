module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("class", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'user', 
                key: 'id', 
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Class;
};