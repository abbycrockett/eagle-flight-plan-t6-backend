module.exports = (sequelize, Sequelize) => {
    const ProfessorClass = sequelize.define("professorClass", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    });
    return ProfessorClass;
};