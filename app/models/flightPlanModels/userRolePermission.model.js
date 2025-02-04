module.exports = (sequelize, Sequelize) => {
    const UserRolePermission = sequelize.define("userRolePermission", {
        userRoleId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'userRole', 
                key: 'id', 
            }
        },
        permissionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'permission', 
                key: 'id', 
            }
        },
        type: {
            type: Sequelize.ENUM,
            values: ['read', 'write', 'delete'],
            allowNull: false,
        }
    });
    return UserRolePermission;
};