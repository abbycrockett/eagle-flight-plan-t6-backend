module.exports = (sequelize, Sequelize) => {
    const BadgeExperienceType = sequelize.define("badgeExperienceType", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return BadgeExperienceType;
};