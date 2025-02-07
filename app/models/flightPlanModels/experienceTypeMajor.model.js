module.exports = (sequelize, Sequelize) => {
    const ExperienceTypeMajor = sequelize.define("experienceTypeMajor", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ExperienceTypeMajor;
};