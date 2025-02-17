const { ideahub } = require("googleapis/build/src/apis/ideahub");

module.exports = (sequelize, Sequelize) => {
    const TaskMajor = sequelize.define("taskMajor", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    return TaskMajor;
};