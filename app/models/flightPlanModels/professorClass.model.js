module.exports = (sequelize, Sequelize) => {
    const ProfessorClass = sequelize.define("professorClass", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // references: {
            //     model: 'user', 
            //     key: 'id', 
            // }
        }
        //FKs: userId, classId
    });
    return ProfessorClass;
};