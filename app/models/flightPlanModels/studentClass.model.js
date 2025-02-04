module.exports = (sequelize, Sequelize) => {
    const StudentClass = sequelize.define("studentClass", {
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
    return StudentClass;
};