module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        graduation_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        points: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        student_issued_id: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return Student;
};