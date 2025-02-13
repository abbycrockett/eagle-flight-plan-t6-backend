const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.session = require("./resumeModels/session.model.js")(sequelize, Sequelize);
db.role = require("./resumeModels/role.model.js")(sequelize, Sequelize);
db.userRole = require("./resumeModels/userRole.model.js")(sequelize, Sequelize);
db.user = require("./resumeModels/user.model.js")(sequelize, Sequelize);
db.userResumeReview = require("./resumeModels/userResumeReview.model.js")(sequelize, Sequelize);
db.student = require("./resumeModels/student.model.js")(sequelize, Sequelize);
db.link = require("./resumeModels/link.model.js")(sequelize, Sequelize);
db.education = require("./resumeModels/education.model.js")(sequelize, Sequelize);
db.course = require("./resumeModels/course.model.js")(sequelize, Sequelize);
db.experience = require("./resumeModels/experience.model.js")(sequelize, Sequelize);
db.project = require("./resumeModels/project.model.js")(sequelize, Sequelize);
db.skill = require("./resumeModels/skill.model.js")(sequelize, Sequelize);
db.certification = require("./resumeModels/certification.model.js")(sequelize, Sequelize);
db.interest = require("./resumeModels/interest.model.js")(sequelize, Sequelize);
db.resumeReview = require("./resumeModels/resumeReview.model.js")(sequelize, Sequelize);
db.resume = require("./resumeModels/resume.model.js")(sequelize, Sequelize);
db.resumeLink = require("./resumeModels/resumeLink.model.js")(sequelize, Sequelize);
db.resumeEducation = require("./resumeModels/resumeEducation.model.js")(sequelize, Sequelize);
db.resumeCourse = require("./resumeModels/resumeCourse.model.js")(sequelize, Sequelize);
db.resumeExperience = require("./resumeModels/resumeExperience.model.js")(sequelize, Sequelize);
db.resumeProject = require("./resumeModels/resumeProject.model.js")(sequelize, Sequelize);
db.resumeSkill = require("./resumeModels/resumeSkill.model.js")(sequelize, Sequelize);
db.resumeCertification = require("./resumeModels/resumeCertification.model.js")(sequelize, Sequelize);
db.resumeInterest = require("./resumeModels/resumeInterest.model.js")(sequelize, Sequelize);
db.reviewerRole = require("./resumeModels/reviewerRole.model.js")(sequelize, Sequelize);
db.adminRole = require("./resumeModels/adminRole.model.js")(sequelize, Sequelize);

// Flight Plan
db.award = require("./flightPlanModels/award.model.js")(sequelize, Sequelize);
db.badge = require("./flightPlanModels/badge.model.js")(sequelize, Sequelize);
db.badgeExperienceType = require("./flightPlanModels/badgeExperienceType.model.js")(sequelize, Sequelize);
db.class = require("./flightPlanModels/class.model.js")(sequelize, Sequelize);
db.cliftonStrength = require("./flightPlanModels/cliftonStrength.model.js")(sequelize, Sequelize);
db.document = require("./flightPlanModels/document.model.js")(sequelize, Sequelize);
db.event = require("./flightPlanModels/event.model.js")(sequelize, Sequelize);
db.eventCliftonStrength = require("./flightPlanModels/eventCliftonStrength.model.js")(sequelize, Sequelize);
db.experienceType = require("./flightPlanModels/experienceType.model.js")(sequelize, Sequelize);
db.experienceTypeEvent = require("./flightPlanModels/experienceTypeEvent.model.js")(sequelize, Sequelize);
db.experienceTypeMajor = require("./flightPlanModels/experienceTypeMajor.model.js")(sequelize, Sequelize);
db.flightPlan = require("./flightPlanModels/flightPlan.model.js")(sequelize, Sequelize);
db.flightPlanExperienceType = require("./flightPlanModels/flightPlanExperienceType.model.js")(sequelize, Sequelize);
db.flightPlanTask = require("./flightPlanModels/flightPlanTask.model.js")(sequelize, Sequelize);
db.major = require("./flightPlanModels/major.model.js")(sequelize, Sequelize);
db.permission = require("./flightPlanModels/permission.model.js")(sequelize, Sequelize);
db.professorClass = require("./flightPlanModels/professorClass.model.js")(sequelize, Sequelize);
db.rolePermission = require("./flightPlanModels/rolePermission.model.js")(sequelize, Sequelize);
db.semester = require("./flightPlanModels/semester.model.js")(sequelize, Sequelize);
db.studentBadge = require("./flightPlanModels/studentBadge.model.js")(sequelize, Sequelize);
db.studentClass = require("./flightPlanModels/studentClass.model.js")(sequelize, Sequelize);
db.studentCliftonStrength = require("./flightPlanModels/studentCliftonStrength.model.js")(sequelize, Sequelize);
db.studentExperienceType = require("./flightPlanModels/studentExperienceType.model.js")(sequelize, Sequelize);
db.studentExperienceTypeEvent = require("./flightPlanModels/studentExperienceTypeEvent.model.js")(sequelize, Sequelize);
db.studentFlightPlan = require("./flightPlanModels/studentFlightPlan.model.js")(sequelize, Sequelize);
db.studentFlightPlanTask = require("./flightPlanModels/studentFlightPlanTask.model.js")(sequelize, Sequelize);
db.studentMajor = require("./flightPlanModels/studentMajor.model.js")(sequelize, Sequelize);
db.task = require("./flightPlanModels/task.model.js")(sequelize, Sequelize);
db.taskBadge = require("./flightPlanModels/taskBadge.model.js")(sequelize, Sequelize);
db.taskCliftonStrength = require("./flightPlanModels/taskCliftonStrength.model.js")(sequelize, Sequelize);
db.taskMajor = require("./flightPlanModels/taskMajor.model.js")(sequelize, Sequelize);
db.transaction = require("./flightPlanModels/transaction.model.js")(sequelize, Sequelize);
db.userRolePermission = require("./flightPlanModels/userRolePermission.model.js")(sequelize, Sequelize);
db.verification = require("./flightPlanModels/verification.model.js")(sequelize, Sequelize);

// Role hasMany UserRole
db.role.hasMany(db.userRole, {
  as: "userRole",
  foreignKey: "roleId",
  onDelete: "CASCADE"
});
db.userRole.belongsTo(db.role, {
  as: "role",
  foreignKey: "roleId",
  onDelete: "SET NULL"
});

// User hasMany UserRole
db.user.hasMany(db.userRole, {
  as: "userRole",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.userRole.belongsTo(db.user, {
  as: "user",
  foreignKey: "userId",
  onDelete: "SET NULL"
});

//User to UserResumeReview 
db.user.hasMany(db.userResumeReview, {
  as: "userResumeReview",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.userResumeReview.belongsTo(db.user, {
  as: "user",
  foreignKey: "userId",
  onDelete: "SET NULL"
});

//ResumeReview to UserResumeReview
db.resumeReview.hasMany(db.userResumeReview, {
  as: "userResumeReview",
  foreignKey: "resumeReviewId",
  onDelete: "CASCADE"
});
db.userResumeReview.belongsTo(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "resumeReviewId",
  onDelete: "SET NULL"
});

//Student to ResumeReview
db.student.hasMany(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.resumeReview.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

//Student to Resume
db.student.hasMany(db.resume, {
  as: "resume",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.resume.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

//ResumeReview to Resume(?)
db.resumeReview.hasOne(db.resume, {
  as: "resume",
  foreignKey: "resumeReviewId",
});
db.resume.belongsTo(db.resumeReview, {
  as: "resumeReview",
  foreignKey: "resumeReviewId",
});

//Resume to ResumeLink
db.resume.hasMany(db.resumeLink, {
  as: "resumeLink",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeLink.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeEducation
db.resume.hasMany(db.resumeEducation, {
  as: "resumeEducation",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeEducation.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeExperience
db.resume.hasMany(db.resumeExperience, {
  as: "resumeExperience",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeExperience.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeProject
db.resume.hasMany(db.resumeProject, {
  as: "resumeProject",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeProject.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeSkill
db.resume.hasMany(db.resumeSkill, {
  as: "resumeSkill",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeSkill.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeCertification
db.resume.hasMany(db.resumeCertification, {
  as: "resumeCertification",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeCertification.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Resume to ResumeInterest
db.resume.hasMany(db.resumeInterest, {
  as: "resumeInterest",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeInterest.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

//Link to ResumeLink
db.link.hasMany(db.resumeLink, {
  as: "resumeLink",
  foreignKey: "linkId",
  onDelete: "CASCADE"
});
db.resumeLink.belongsTo(db.link, {
  as: "link",
  foreignKey: "linkId",
  onDelete: "SET NULL"
});

//Education to ResumeEducation
db.education.hasMany(db.resumeEducation, {
  as: "resumeEducation",
  foreignKey: "educationId",
  onDelete: "CASCADE"
});
db.resumeEducation.belongsTo(db.education, {
  as: "education",
  foreignKey: "educationId",
  onDelete: "SET NULL"
});

// COURSE CHANGES:------------------
// Resume to ResumeCourse
db.resume.hasMany(db.resumeCourse, {
  as: "resumeCourse",
  foreignKey: "resumeId",
  onDelete: "CASCADE"
});
db.resumeCourse.belongsTo(db.resume, {
  as: "resume",
  foreignKey: "resumeId",
  onDelete: "SET NULL"
});

// Education to ResumeCourse
db.education.hasMany(db.resumeCourse, {
  as: "resumeCourse",
  foreignKey: "educationId",
  onDelete: "CASCADE"
});
db.resumeCourse.belongsTo(db.education, {
  as: "education",
  foreignKey: "educationId",
  onDelete: "SET NULL"
});

// Course to ResumeCourse
db.course.hasMany(db.resumeCourse, {
  as: "resumeCourse",
  foreignKey: "courseId",
  onDelete: "CASCADE"
});
db.resumeCourse.belongsTo(db.course, {
  as: "course",
  foreignKey: "courseId",
  onDelete: "SET NULL"
});
// END OF COURSE CHANGES ------------------

//Experience to ResumeExperience
db.experience.hasMany(db.resumeExperience, {
  as: "resumeExperience",
  foreignKey: "experienceId",
  onDelete: "CASCADE"
});
db.resumeExperience.belongsTo(db.experience, {
  as: "experience",
  foreignKey: "experienceId",
  onDelete: "SET NULL"
});

//Project to ResumeProject
db.project.hasMany(db.resumeProject, {
  as: "resumeProject",
  foreignKey: "projectId",
  onDelete: "CASCADE"
});
db.resumeProject.belongsTo(db.project, {
  as: "project",
  foreignKey: "projectId",
  onDelete: "SET NULL"
});

//Skill to ResumeSkill
db.skill.hasMany(db.resumeSkill, {
  as: "resumeSkill",
  foreignKey: "skillId",
  onDelete: "CASCADE"
});
db.resumeSkill.belongsTo(db.skill, {
  as: "skill",
  foreignKey: "skillId",
  onDelete: "SET NULL"
});

//Certification to ResumeCertification
db.certification.hasMany(db.resumeCertification, {
  as: "resumeCertification",
  foreignKey: "certificationId",
  onDelete: "CASCADE"
});
db.resumeCertification.belongsTo(db.certification, {
  as: "certification",
  foreignKey: "certificationId",
  onDelete: "SET NULL"
});

//Interest to ResumeInterest
db.interest.hasMany(db.resumeInterest, {
  as: "resumeInterest",
  foreignKey: "interestId",
  onDelete: "CASCADE"
});
db.resumeInterest.belongsTo(db.interest, {
  as: "interest",
  foreignKey: "interestId",
  onDelete: "SET NULL"
});

// Foreign keys
// User to Student
db.student.hasOne(db.user, {
  as: "user",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});

// Link to Student
db.student.hasMany(db.link, {
  as: "link",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.link.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Education to Student
db.student.hasMany(db.education, {
  as: "education",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.education.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Course to Education
db.education.hasMany(db.course, {
  as: "course",
  foreignKey: "educationId",
  onDelete: "CASCADE"
});
db.course.belongsTo(db.education, {
  as: "education",
  foreignKey: "educationId",
  onDelete: "SET NULL"
});

// Course to Student
db.student.hasMany(db.course, {
  as: "course",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.course.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Experience to Student
db.student.hasMany(db.experience, {
  as: "experience",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.experience.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Project to Student
db.student.hasMany(db.project, {
  as: "project",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.project.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Skill to Student
db.student.hasMany(db.skill, {
  as: "skill",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.skill.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Certification to Student
db.student.hasMany(db.certification, {
  as: "certification",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.certification.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Interest to Student
db.student.hasMany(db.interest, {
  as: "interest",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.interest.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Foreign keys
db.reviewerRole.hasOne(db.user, {
  as: "user",
  foreignKey: "reviewerId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.reviewerRole, {
  as: "reviewerRole",
  foreignKey: "reviewerId",
  onDelete: "CASCADE"
}); 

db.adminRole.hasOne(db.user, {
  as: "user",
  foreignKey: "adminId",
  onDelete: "SET NULL"
});
db.user.belongsTo(db.adminRole, {
  as: "adminRole",
  foreignKey: "adminId",
  onDelete: "CASCADE"
});

// Flight Plan Foreign Keys
// UserRolePermission
db.permission.hasMany(db.userRolePermission, {
  as: "userRolePermission",
  foreignKey: "permissionId",
  onDelete: "CASCADE"
});
db.userRolePermission.belongsTo(db.permission, {
  as: "permission",
  foreignKey: "permissionId",
  onDelete: "SET NULL" 
});

db.userRole.hasMany(db.userRolePermission, {
  as: "userRolePermission",
  foreignKey: "userRoleId",
  onDelete: "CASCADE"
});
db.userRolePermission.belongsTo(db.userRole, {
  as: "userRole",
  foreignKey: "userRoleId",
  onDelete: "SET NULL"
});

// RolePermission
db.permission.hasMany(db.rolePermission, {
  as: "rolePermission",
  foreignKey: "permissionId",
  onDelete: "CASCADE"
});
db.rolePermission.belongsTo(db.permission, {
  as: "permission",
  foreignKey: "permissionId",
  onDelete: "SET NULL"
});

db.role.hasMany(db.rolePermission, {
  as: "rolePermission",
  foreignKey: "roleId",
  onDelete: "CASCADE"
});
db.rolePermission.belongsTo(db.role, {
  as: "role",
  foreignKey: "roleId",
  onDelete: "SET NULL"
});

// Document
db.student.hasMany(db.document, {
  as: "document",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.document.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Class
db.semester.hasMany(db.class, {
  as: "class",
  foreignKey: "semesterId",
  onDelete: "CASCADE"
});
db.class.belongsTo(db.semester, {
  as: "semester",
  foreignKey: "semesterId",
  onDelete: "SET NULL"
});

// StudentClass
db.student.hasMany(db.studentClass, {
  as: "studentClass",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentClass.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

db.class.hasMany(db.studentClass, {
  as: "studentClass",
  foreignKey: "classId",
  onDelete: "CASCADE"
});
db.studentClass.belongsTo(db.class, {
  as: "class",
  foreignKey: "classId",
  onDelete: "SET NULL"
});

// ProfessorClass
db.user.hasMany(db.professorClass, {
  as: "professorClass",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.professorClass.belongsTo(db.user, {
  as: "user",
  foreignKey: "userId",
  onDelete: "SET NULL"
});

db.class.hasMany(db.professorClass, {
  as: "professorClass",
  foreignKey: "classId",
  onDelete: "CASCADE"
});
db.professorClass.belongsTo(db.class, {
  as: "class",
  foreignKey: "classId",
  onDelete: "SET NULL"
});

// StudentMajor
db.major.hasMany(db.studentMajor, {
  as: "studentMajor",
  foreignKey: "majorId",
  onDelete: "CASCADE"
});
db.studentMajor.belongsTo(db.major, {
  as: "major",
  foreignKey: "majorId",
  onDelete: "SET NULL"
});

db.student.hasMany(db.studentMajor, {
  as: "studentMajor",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentMajor.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// StudentCliftonStrength
db.cliftonStrength.hasMany(db.studentCliftonStrength, {
  as: "studentCliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "CASCADE"
});
db.studentCliftonStrength.belongsTo(db.cliftonStrength, {
  as: "cliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "SET NULL"
});

db.student.hasMany(db.studentCliftonStrength, {
  as: "studentCliftonStrength",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentCliftonStrength.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// StudentBadge
db.badge.hasMany(db.studentBadge, {
  as: "studentBadge",
  foreignKey: "badgeId",
  onDelete: "CASCADE"
});
db.studentBadge.belongsTo(db.badge, {
  as: "badge",
  foreignKey: "badgeId",
  onDelete: "SET NULL"
});

db.student.hasMany(db.studentBadge, {
  as: "studentBadge",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentBadge.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

// Task - Self Reference, will have to see how this works
db.task.hasMany(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.task.belongsTo(db.task, {
  as: "prerequisite", // THe prereq task, May need to change this
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

db.verification.hasOne(db.task, {
  as: "task",
  foreignKey: "verificationId",
  onDelete: "SET NULL"
});
db.task.belongsTo(db.verification, {
  as: "verification",
  foreignKey: "verificationId",
  onDelete: "SET NULL"
});

// TaskMajor
db.task.hasMany(db.taskMajor, {
  as: "taskMajor",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.taskMajor.belongsTo(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

db.major.hasMany(db.taskMajor, {
  as: "taskMajor",
  foreignKey: "majorId",
  onDelete: "CASCADE"
});
db.taskMajor.belongsTo(db.major, {
  as: "major",
  foreignKey: "majorId",
  onDelete: "SET NULL"
});

// TaskCliftonStrength
db.task.hasMany(db.taskCliftonStrength, {
  as: "taskCliftonStrength",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.taskCliftonStrength.belongsTo(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

db.cliftonStrength.hasMany(db.taskCliftonStrength, {
  as: "taskCliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "CASCADE"
});
db.taskCliftonStrength.belongsTo(db.cliftonStrength, {
  as: "cliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "SET NULL"
});

// TaskBadge
db.task.hasMany(db.taskBadge, {
  as: "taskBadge",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.taskBadge.belongsTo(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

db.badge.hasMany(db.taskBadge, {
  as: "taskBadge",
  foreignKey: "badgeId",
  onDelete: "CASCADE"
});
db.taskBadge.belongsTo(db.badge, {
  as: "badge",
  foreignKey: "badgeId",
  onDelete: "SET NULL"
});

// ExperienceTypeMajor
db.experienceType.hasMany(db.experienceTypeMajor, {
  as: "experienceTypeMajor",
  foreignKey: "experienceTypeId",
  onDelete: "CASCADE"
});
db.experienceTypeMajor.belongsTo(db.experienceType, {
  as: "experienceType",
  foreignKey: "experienceTypeId",
  onDelete: "SET NULL"
});

db.major.hasMany(db.experienceTypeMajor, {
  as: "experienceTypeMajor",
  foreignKey: "majorId",
  onDelete: "CASCADE"
});
db.experienceTypeMajor.belongsTo(db.major, {
  as: "major",
  foreignKey: "majorId",
  onDelete: "SET NULL"
});

// BadgeExperienceType
db.experienceType.hasMany(db.badgeExperienceType, {
  as: "badgeExperienceType",
  foreignKey: "experienceTypeId",
  onDelete: "CASCADE"
});
db.badgeExperienceType.belongsTo(db.experienceType, {
  as: "experienceType",
  foreignKey: "experienceTypeId",
  onDelete: "SET NULL"
});

db.badge.hasMany(db.badgeExperienceType, {
  as: "badgeExperienceType",
  foreignKey: "badgeId",
  onDelete: "CASCADE"
});
db.badgeExperienceType.belongsTo(db.badge, {
  as: "badge",
  foreignKey: "badgeId",
  onDelete: "SET NULL"
});

// StudentExperienceType
db.student.hasMany(db.studentExperienceType, {
  as: "studentExperienceType",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentExperienceType.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

db.experienceType.hasMany(db.studentExperienceType, {
  as: "studentExperienceType",
  foreignKey: "experienceTypeId",
  onDelete: "CASCADE"
});
db.studentExperienceType.belongsTo(db.experienceType, {
  as: "experienceType",
  foreignKey: "experienceTypeId",
  onDelete: "SET NULL"
});

// Event
db.verification.hasOne(db.event, {
  as: "event",
  foreignKey: "verificationId",
  onDelete: "CASCADE"
});
db.event.belongsTo(db.verification, {
  as: "verification",
  foreignKey: "verificationId",
  onDelete: "SET NULL"
});

// EventCliftonStrength
db.event.hasMany(db.eventCliftonStrength, {
  as: "eventCliftonStrength",
  foreignKey: "eventId",
  onDelete: "CASCADE"
});
db.eventCliftonStrength.belongsTo(db.event, {
  as: "event",
  foreignKey: "eventId",
  onDelete: "SET NULL"
});

db.cliftonStrength.hasMany(db.eventCliftonStrength, {
  as: "eventCliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "CASCADE"
});
db.eventCliftonStrength.belongsTo(db.cliftonStrength, {
  as: "cliftonStrength",
  foreignKey: "cliftonStrengthId",
  onDelete: "SET NULL"
});

// ExperienceTypeEvent
db.experienceType.hasMany(db.experienceTypeEvent, {
  as: "experienceTypeEvent",
  foreignKey: "experienceTypeId",
  onDelete: "CASCADE"
});
db.experienceTypeEvent.belongsTo(db.experienceType, {
  as: "experienceType",
  foreignKey: "experienceTypeId",
  onDelete: "SET NULL"
});

db.event.hasMany(db.experienceTypeEvent, {
  as: "experienceTypeEvent",
  foreignKey: "eventId",
  onDelete: "CASCADE"
});
db.experienceTypeEvent.belongsTo(db.event, {
  as: "event",
  foreignKey: "eventId",
  onDelete: "SET NULL"
});

// StudentExperienceTypeEvent
db.studentExperienceType.hasMany(db.studentExperienceTypeEvent, {
  as: "studentExperienceTypeEvent",
  foreignKey: "studentExperienceTypeId",
  onDelete: "CASCADE"
});
db.studentExperienceTypeEvent.belongsTo(db.studentExperienceType, {
  as: "studentExperienceType",
  foreignKey: "studentExperienceTypeId",
  onDelete: "SET NULL"
});

db.event.hasMany(db.studentExperienceTypeEvent, {
  as: "studentExperienceTypeEvent",
  foreignKey: "eventId",
  onDelete: "CASCADE"
});
db.studentExperienceTypeEvent.belongsTo(db.event, {
  as: "event",
  foreignKey: "eventId",
  onDelete: "SET NULL"
});

db.user.hasMany(db.studentExperienceTypeEvent, {
  as: "studentExperienceTypeEvent",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.studentExperienceTypeEvent.belongsTo(db.user, {
  as: "approver", // Different name from usual, don't know if this is right or not
  foreignKey: "userId",
  onDelete: "SET NULL"
});

// FlightPlan
db.semester.hasOne(db.flightPlan, {
  as: "flightPlan",
  foreignKey: "semesterId",
  onDelete: "SET NULL"
});
db.flightPlan.belongsTo(db.semester, {
  as: "semester",
  foreignKey: "semesterId",
  onDelete: "SET NULL"
});

// StudentFlightPlan
db.student.hasMany(db.studentFlightPlan, {
  as: "studentFlightPlan",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.studentFlightPlan.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

db.flightPlan.hasMany(db.studentFlightPlan, {
  as: "studentFlightPlan",
  foreignKey: "flightPlanId",
  onDelete: "CASCADE"
});
db.studentFlightPlan.belongsTo(db.flightPlan, {
  as: "flightPlan",
  foreignKey: "flightPlanId",
  onDelete: "SET NULL"
});

// FlightPlanTask
db.flightPlan.hasMany(db.flightPlanTask, {
  as: "flightPlanTask",
  foreignKey: "flightPlanId",
  onDelete: "CASCADE"
});
db.flightPlanTask.belongsTo(db.student, {
  as: "student",
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

db.task.hasMany(db.flightPlanTask, {
  as: "flightPlanTask",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.flightPlanTask.belongsTo(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

// FlightPlanExperienceType
db.flightPlan.hasMany(db.flightPlanExperienceType, {
  as: "flightPlanExperienceType",
  foreignKey: "flightPlanId",
  onDelete: "CASCADE"
});
db.flightPlanExperienceType.belongsTo(db.flightPlan, {
  as: "flightPlan",
  foreignKey: "flightPlanId",
  onDelete: "SET NULL"
});

db.experienceType.hasMany(db.flightPlanExperienceType, {
  as: "flightPlanExperienceType",
  foreignKey: "experienceTypeId",
  onDelete: "CASCADE"
});
db.flightPlanExperienceType.belongsTo(db.experienceType, {
  as: "experienceType",
  foreignKey: "experienceTypeId",
  onDelete: "SET NULL"
});

// StudentFlightPlanTask
db.studentFlightPlan.hasMany(db.studentFlightPlanTask, {
  as: "studentFlightPlanTask",
  foreignKey: "studentFlightPlanId",
  onDelete: "CASCADE"
});
db.studentFlightPlanTask.belongsTo(db.studentFlightPlan, {
  as: "studentFlightPlan",
  foreignKey: "studentFlightPlanId",
  onDelete: "SET NULL"
});

db.task.hasMany(db.studentFlightPlanTask, {
  as: "studentFlightPlanTask",
  foreignKey: "taskId",
  onDelete: "CASCADE"
});
db.studentFlightPlanTask.belongsTo(db.task, {
  as: "task",
  foreignKey: "taskId",
  onDelete: "SET NULL"
});

db.user.hasMany(db.studentFlightPlanTask, {
  as: "studentFlightPlanTask",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.studentFlightPlanTask.belongsTo(db.user, {
  as: "approver", // Different Name from user
  foreignKey: "userId",
  onDelete: "SET NULL"
});

// Transaction
db.user.hasMany(db.transaction, {
  as: "transaction",
  foreignKey: "userId",
  onDelete: "CASCADE"
});
db.transaction.belongsTo(db.user, {
  as: "verified_by", // Different Name from usual
  foreignKey: "userId",
  onDelete: "SET NULL"
});

db.student.hasMany(db.transaction, {
  as: "transaction",
  foreignKey: "studentId",
  onDelete: "CASCADE"
});
db.transaction.belongsTo(db.student, {
  as: "purchased_by", // Different Name from usual
  foreignKey: "studentId",
  onDelete: "SET NULL"
});

db.award.hasMany(db.transaction, {
  as: "transaction",
  foreignKey: "awardId",
  onDelete: "CASCADE"
});
db.transaction.belongsTo(db.award, {
  as: "award",
  foreignKey: "awardId",
  onDelete: "SET NULL"
});

db.sequelize.sync({ alter: true });

module.exports = db;