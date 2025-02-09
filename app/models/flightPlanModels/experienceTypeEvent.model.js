module.exports = (sequelize, Sequelize) => {
    const ExperienceTypeEvent = sequelize.define("experienceTypeEvent", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return ExperienceTypeEvent;
};