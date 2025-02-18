module.exports = (sequelize, Sequelize) => {
    const StudentClass = sequelize.define("studentClass", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        semester: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    });
    return StudentClass;
};