module.exports = (sequelize, Sequelize) => {
  const StudentEvent = sequelize.define("studentEvent", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    attendence_status: {
      type: Sequelize.ENUM('registered', 'attended', 'did_not_attend'),
      allowNull: false,
      defaultValue: 'registered',
    },
  });

  return StudentEvent;
};
