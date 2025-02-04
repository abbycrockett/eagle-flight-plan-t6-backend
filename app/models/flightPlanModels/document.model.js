module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        completion_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        semester_approved: {
            type: Sequelize.ENUM,
            values: ['Fall', 'Spring'],
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Document;
};