module.exports = (sequelize, Sequelize) => {
    const RolePermission = sequelize.define("rolePermission", {
        roleId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'role', 
                key: 'id', 
            }
        },
        permissionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'permission', 
                key: 'id', 
            }
        }
    });
    return RolePermission;
};