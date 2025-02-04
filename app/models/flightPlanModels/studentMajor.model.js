module.exports = (sequelize, Sequelize) => {
    const StudentMajor = sequelize.define("studentMajor", {
        studentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'student',
                key: 'id', 
            }
        },
        majorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'major',
                key: 'id', 
            }
        },
        dateAcquired: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
    return StudentMajor;
};