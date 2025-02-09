module.exports = (sequelize, Sequelize) => {
    const TaskCliftonStrength = sequelize.define("taskCliftonStrength", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // taskId
        // cliftonStrengthId
    });
    return TaskCliftonStrength;
};