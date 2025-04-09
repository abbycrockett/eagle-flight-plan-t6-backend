module.exports = (sequelize, Sequelize) => {
    const StudentBadge = sequelize.define("studentBadge", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        points_earned: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        date_acquired: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
    return StudentBadge;
};