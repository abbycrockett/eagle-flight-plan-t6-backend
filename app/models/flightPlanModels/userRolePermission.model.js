module.exports = (sequelize, Sequelize) => {
    const UserRolePermission = sequelize.define("userRolePermission", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return UserRolePermission;
};