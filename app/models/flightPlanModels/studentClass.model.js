module.exports = (sequelize, Sequelize) => {
    const StudentClass = sequelize.define("studentClass", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // userId
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