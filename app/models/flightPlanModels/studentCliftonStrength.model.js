module.exports = (sequelize, Sequelize) => {
    const StudentCliftonStrength = sequelize.define("studentCliftonStrength", {
        studentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'student', 
                key: 'id', 
            }
        },
        cliftonStrengthId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'cliftonStrength', 
                key: 'id',
            }
        }
    });
    return StudentCliftonStrength;
};