module.exports = (sequelize, Sequelize) => {
    const Verification = sequelize.define("verification", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM('automatic', 'semi_automatic', 'manual'),
            allowNull: false,
            defaultValue: 'automatic',
        },
        google_form_url: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return Verification;
};