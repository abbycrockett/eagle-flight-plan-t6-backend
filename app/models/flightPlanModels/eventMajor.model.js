module.exports = (sequelize, Sequelize) => {
  const EventMajor = sequelize.define("eventMajor", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return EventMajor;
};
