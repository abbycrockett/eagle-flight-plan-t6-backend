module.exports = (sequelize, Sequelize) => {
    const Permission = sequelize.define("permission", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM,
            values: ['read', 'write', 'delete'],
            allowNull: false,
        }
    });
    return Permission;
};