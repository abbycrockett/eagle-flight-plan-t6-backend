module.exports = (sequelize, Sequelize) => {
    const TaskMajor = sequelize.define("taskMajor", {
        taskId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'task', 
                key: 'id',
            }
        },
        majorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'major', 
                key: 'id',
            }
        }
    });
    return TaskMajor;
};