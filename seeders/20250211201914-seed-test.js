'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Clear Preexisting data
    // Nondependent Tables
    /**
    await queryInterface.bulkDelete('award', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('badge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('class', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('cliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('major', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('permission', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('role', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('semester', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('student', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('task', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('user', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('verification', null, { truncate: true, cascade: true, restartIdentity: true });
    
    // Bridge Tables
    await queryInterface.bulkDelete('badgeExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('eventCliftonStrength', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceTypeEvent', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceTypeMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlanExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlanTask', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('professorClass', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('rolePermission', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentCliftonStrength', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentFlightPlan', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskBadge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('userRole', null, { truncate: true, cascade: true, restartIdentity: true });
 
    // Bridge Tables +
    await queryInterface.bulkDelete('document', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('event', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlan', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentBadge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentClass', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentExperienceTypeEvent', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentFlightPlanTask', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('transaction', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('userRolePermission', null, { truncate: true, cascade: true, restartIdentity: true });
    */
    // Nondependent Tables
    // Populate awards


    // Populate badges


    // Populate classes


    // Populate cliftonStrengths


    // Populate experienceType


    // Populate majors


    // Populate permissions


    // Populate roles


    // Populate semesters


    // Populate students


    // Populate taskPrerequisites


    // Populate users
    await queryInterface.bulkInsert('users', [
      { fName: 'John', lName: 'Doe', email: 'john.doe@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Jane', lName: 'Smith', email: 'jane.smith@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Alice', lName: 'Johnson', email: 'alice.johnson@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Bob', lName: 'Williams', email: 'bob.williams@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Charlie', lName: 'Brown', email: 'charlie.brown@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Dana', lName: 'Davis', email: 'dana.davis@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Eve', lName: 'Martin', email: 'eve.martin@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Frank', lName: 'Garcia', email: 'frank.garcia@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Grace', lName: 'Rodriguez', email: 'grace.rodriguez@example.com', createdAt: new Date(), updatedAt: new Date() },
      { fName: 'Hannah', lName: 'Martinez', email: 'hannah.martinez@example.com', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Populate verifications


    // Bridge Tables
    // Populate badgeExperienceType


    // Populate eventCliftonStrength


    // Populate experienceTypeEvent


    // Populate experienceTypeMajor


    // Populate flightPlanExperienceType


    // Populate flightPlanTask


    // Populate professorClass


    // Populate rolePermission


    // Populate studentCliftonStrength


    // Populate studentExperienceType


    // Populate studentFlightPlan


    // Populate studentMajor


    // Populate taskBadge


    // Populate taskCliftonStrengths


    // Populate taskMajor


    // Populate userRole


    // Bridge Tables +
    // Populate documents


    // Populate events


    // Populate flightPlans


    // Populate studentBadges


    // Populate studentClasses


    // Populate studentExperienceTypeEvents


    // Populate studentFlightPlanTasks


    // Populate transactions


    // Populate userRolePermissions

  },

  async down(queryInterface, Sequelize) {
    // Nondependent Tables
    await queryInterface.bulkDelete('award', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('badge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('class', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('cliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('major', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('permission', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('role', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('semester', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('student', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('task', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('user', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('verification', null, { truncate: true, cascade: true, restartIdentity: true });

    // Bridge Tables
    await queryInterface.bulkDelete('badgeExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('eventCliftonStrength', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceTypeEvent', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('experienceTypeMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlanExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlanTask', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('professorClass', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('rolePermission', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentCliftonStrength', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentExperienceType', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentFlightPlan', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskBadge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('taskMajor', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('userRole', null, { truncate: true, cascade: true, restartIdentity: true });

    // Bridge Tables +
    await queryInterface.bulkDelete('document', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('event', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('flightPlan', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentBadge', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentClass', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentExperienceTypeEvent', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('studentFlightPlanTask', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('transaction', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkDelete('userRolePermission', null, { truncate: true, cascade: true, restartIdentity: true });

  }
};
