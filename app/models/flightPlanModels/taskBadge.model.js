module.exports = (sequelize, Sequelize) => {
    const TaskBadge = sequelize.define("taskBadge", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return TaskBadge;
};