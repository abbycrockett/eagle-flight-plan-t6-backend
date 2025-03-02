module.exports = (sequelize, Sequelize) => {
    const StudentMajor = sequelize.define("studentMajor", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return StudentMajor;
};