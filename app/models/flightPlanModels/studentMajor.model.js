module.exports = (sequelize, Sequelize) => {
    const StudentMajor = sequelize.define("studentMajor", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // studentId
        // majorId
        dateAcquired: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
    return StudentMajor;
};