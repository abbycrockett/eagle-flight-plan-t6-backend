module.exports = (sequelize, Sequelize) => {
    const Permission = sequelize.define("permission", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM,
            values: [ 'user_maintenance', 'flightplan_maintenance', 'flightplan_approval', 'shop_maintenance', 'shop_approval', 'resume_reviewer', 'admin_view', 'student_view', 'professor_view'],
            allowNull: false,
        }
    });
    return Permission;
};