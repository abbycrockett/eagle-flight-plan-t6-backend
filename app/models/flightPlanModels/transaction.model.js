module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        points_spent: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        date_approved: {
            type: Sequelize.DATETIME,
            allowNull: false,
        },
    });
    return Transaction;
};