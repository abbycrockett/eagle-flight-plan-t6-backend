module.exports = (sequelize, Sequelize) => {
    const UserRolePermission = sequelize.define("userRolePermission", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // userRoleId
        // permissionId
        type: {
            type: Sequelize.ENUM,
            values: ['read', 'write', 'delete'],
            allowNull: false,
        }
    });
    return UserRolePermission;
};