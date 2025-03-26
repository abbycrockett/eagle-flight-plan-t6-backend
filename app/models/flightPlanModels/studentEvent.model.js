module.exports = (sequelize, Sequelize) => {
  const StudentEvent = sequelize.define("studentEvent", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // studentId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'students',
    //         key: 'id'
    //     }
    // },
    // eventId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'events',
    //         key: 'id'
    //     }
    // }
  });

  return StudentEvent;
};
