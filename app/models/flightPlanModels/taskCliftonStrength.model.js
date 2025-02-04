module.exports = (sequelize, Sequelize) => {
    const TaskCliftonStrength = sequelize.define("taskCliftonStrength", {
        taskId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'task', 
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
    return TaskCliftonStrength;
};