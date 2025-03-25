module.exports = (sequelize, Sequelize) => {
    const ExperienceTypeCliftonStrength = sequelize.define("experienceTypeCliftonStrength", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ExperienceTypeCliftonStrength;
};