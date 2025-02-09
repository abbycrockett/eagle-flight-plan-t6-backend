module.exports = (sequelize, Sequelize) => {
    const StudentClass = sequelize.define("studentClass", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // userId
        },
        semester: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    });
    return StudentClass;
};