module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        completion_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        semester_approved: {
            type: Sequelize.ENUM,
            values: ['fall', 'spring'],
            allowNull: true,
        },
        image: {
            type: Sequelize.BLOB("long"),
            allowNull: true,
        },
        image_type: {
            type: Sequelize.STRING, // Image file type
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Document;
};