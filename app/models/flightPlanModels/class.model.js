module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("class", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            //userId
        },
        course_number: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        course_name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        department: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Class;
};