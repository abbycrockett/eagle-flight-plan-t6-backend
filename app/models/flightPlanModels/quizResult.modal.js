module.exports = (sequelize, Sequelize) => {
    const QuizResult = sequelize.define("QuizResult", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        formId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        score: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        status: {
            type: Sequelize.ENUM('Passed', 'Failed'),
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    return QuizResult;
};