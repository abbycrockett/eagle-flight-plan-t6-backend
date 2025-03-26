module.exports = (sequelize, Sequelize) => {
  const StudentEvent = sequelize.define("studentEvent", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return StudentEvent;
};
