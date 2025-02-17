module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          fName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          phone_number: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          prefix: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          // refresh_token: {
          //   type: Sequelize.STRING(512),
          //   allowNull: true
          // },
          // expiration_date: {
          //   type: Sequelize.DATE,
          //   allowNull: true
          // },
    });
    return User;
  };