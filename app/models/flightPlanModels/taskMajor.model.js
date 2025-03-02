module.exports = (sequelize, Sequelize) => {
    const TaskMajor = sequelize.define("taskMajor", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    });
    return TaskMajor;
};