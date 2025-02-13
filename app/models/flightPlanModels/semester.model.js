module.exports = (sequelize, Sequelize) => {
    const Semester = sequelize.define("semester", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        start_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    });
    return Semester;
};