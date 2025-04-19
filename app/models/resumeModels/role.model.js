module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role_type: {
      type: Sequelize.ENUM('admin', 'student', 'reviewer', 'student_worker', 'professor', 'custom'),
      allowNull: false,
      defaultValue: 'custom',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Role;
};