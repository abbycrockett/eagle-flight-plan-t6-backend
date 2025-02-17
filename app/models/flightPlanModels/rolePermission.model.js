const { ideahub } = require("googleapis/build/src/apis/ideahub");

module.exports = (sequelize, Sequelize) => {
    const RolePermission = sequelize.define("rolePermission", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    });
    return RolePermission;
};