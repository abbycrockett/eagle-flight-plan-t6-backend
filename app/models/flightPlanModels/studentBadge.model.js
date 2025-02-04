module.exports = (sequelize, Sequelize) => {
    const StudentBadge = sequelize.define("studentBadge", {
        studentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'student', 
                key: 'id',
            }
        },
        badgeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'badge', 
                key: 'id', 
            }
        },
        date_acquired: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
    return StudentBadge;
};