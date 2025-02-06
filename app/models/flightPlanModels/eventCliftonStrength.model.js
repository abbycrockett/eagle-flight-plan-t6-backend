module.exports = (sequelize, Sequelize) => {
    const EventCliftonStrength = sequelize.define("eventCliftonStrength", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
    return EventCliftonStrength;
};