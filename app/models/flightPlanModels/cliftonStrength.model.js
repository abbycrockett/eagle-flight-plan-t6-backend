module.exports = (sequelize, Sequelize) => {
    const CliftonStrength = sequelize.define("cliftonStrength", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category: {
            type: Sequelize.ENUM,
            values: ['Executing', 'Influencing', 'Relationship Building', 'Strategic Thinking'],
            allowNull: false,
        }
    });
    return CliftonStrength;
};