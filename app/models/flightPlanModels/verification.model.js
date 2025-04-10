module.exports = (sequelize, Sequelize) => {
    const Verification = sequelize.define("verification", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM('quiz', 'reflection', 'required_document', 'csv_upload'),
            allowNull: false,
            defaultValue: 'quiz',
        },
        public_google_form_url: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        private_google_form_url: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return Verification;
};