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
            allowNull: true,
        },
        category: {
            type: Sequelize.ENUM,
            values: ['executing', 'influencing', 'relationship_building', 'strategic_thinking'],
            allowNull: false,
        }
    });
    return CliftonStrength;
};