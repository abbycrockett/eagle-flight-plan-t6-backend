module.exports = (sequelize, Sequelize) => {
  const StudentEvent = sequelize.define("studentEvent", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    attendance_status: {
      type: Sequelize.ENUM('registered', 'attended', 'did_not_attend'),
      allowNull: false,
      defaultValue: "registered",
    },
    verification_status: {
      type: Sequelize.ENUM("approved", "in_progress", "denied", "n/a"),
      allowNull: false,
      defaultValue: "n/a",
    },
    calendar_id: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
      defaultValue: 'registered',
  });

  return StudentEvent;
};
