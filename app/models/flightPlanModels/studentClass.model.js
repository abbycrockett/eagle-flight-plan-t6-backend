module.exports = (sequelize, Sequelize) => {
    const StudentClass = sequelize.define("studentClass", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // userId
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
    return StudentClass;
};