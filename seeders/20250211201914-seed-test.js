'use strict';

const { content_v2_1 } = require('googleapis');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    // Clear Preexisting data
    {
      // Eagle Flight Plan
      {
        // Nondependent Tables
        {
          await queryInterface.bulkDelete('awards', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('badges', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('cliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('experienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('majors', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('permissions', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('roles', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('students', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('semesters', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('verifications', null, { truncate: true, cascade: true, restartIdentity: true });
        }

        // Bridge Tables
        {
          await queryInterface.bulkDelete('badgeExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('classes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('documents', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('events', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('experienceTypeMajors', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('flightPlans', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('rolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentBadges', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentMajors', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('tasks', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });
        }

        // Bridge Tables +
        {
          await queryInterface.bulkDelete('experienceTypeEvents', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('eventCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('flightPlanExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('flightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('professorClasses', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentClasses', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentExperienceTypeEvents', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentFlightPlans', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('taskBadges', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('taskCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('taskMajors', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('transactions', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('userRoles', null, { truncate: true, cascade: true, restartIdentity: true });
        }

        // Bridge Tables *
        {
          await queryInterface.bulkDelete('studentFlightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('userRolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
        }
      }
      // Resume Builder
      {
        // Nondependent Tables
        {
          await queryInterface.bulkDelete('adminRoles', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('reviewerRoles', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('roles', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('students', null, { truncate: true, cascade: true, restartIdentity: true });
        }
        // Bridge Tables that have one FK
        {
          await queryInterface.bulkDelete('certifications', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('education', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('experiences', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('interests', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('links', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('projects', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeReviews', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('skills', null, { truncate: true, cascade: true, restartIdentity: true });
        }
        // Bridge Tables + that have two FKs
        {
          await queryInterface.bulkDelete('courses', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumes', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeCertifications', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeEducations', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeExperiences', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeInterests', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeLinks', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeProjects', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('resumeSkills', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('userResumeReviews', null, { truncate: true, cascade: true, restartIdentity: true });
        }
        // Bridge Tables * that have three FKs
        {
          await queryInterface.bulkDelete('resumeCourses', null, { truncate: true, cascade: true, restartIdentity: true });
        }
      }
    }
    // Populate Tables
    {
      {
        // Temp seeder data for resume builder
        // Populate reviewerRoles
        await queryInterface.bulkInsert('reviewerRoles', [
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() }
        ]);

        // Populate adminRoles
        await queryInterface.bulkInsert('adminRoles', [
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() }
        ]);
      }
      // Eagle Flight Plan
      {
        // Nondependent Tables
        {
          // Populate awards
          await queryInterface.bulkInsert('awards', [
            { name: 'Professional Attire Package', description: 'Includes a blazer, pants, and tie.', cost: 500, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Professional Headshot', description: 'Receive a professional headshot session.', cost: 300, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'OC Water Bottle', description: 'High-quality OC water bottle.', cost: 150, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Dawson Hollow Concert Ticket', description: 'Includes tickets to the Dawson Hollow concert.', cost: 200, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Business Attire Complete Set', description: 'Includes blazer, pants, tie, and a professional headshot.', cost: 800, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Stylish Blazer', description: 'Receive a stylish and professional blazer.', cost: 400, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Formal Pants', description: 'Classic formal pants suitable for business settings.', cost: 300, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Formal Tie', description: 'Elegant tie to complement your business attire.', cost: 100, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Formal Pencil Skirt', description: 'Classy skirt for warm days.', cost: 250, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Complete Professional Package', description: 'All items including attire, headshot, and concert ticket.', cost: 1200, redemption_type: 'in_person', redemption_info: 'Pick up at Career Services office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate badges
          await queryInterface.bulkInsert('badges', [
            { name: 'Beginner Explorer', description: 'Awarded for completing the first challenge.', type: 'task_completion', points: 100, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Master Strategist', description: 'Given to players who complete all strategic levels.', type: 'experience_completion', points: 500, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Speed Runner', description: 'For finishing a task under the time limit.', type: 'flightplan_completion', points: 300, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Ultimate Collector', description: 'Earned by collecting all available items.', type: 'task_completion', points: 700, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Team Player', description: 'Awarded for participating in a team event.', type: 'experience_completion', points: 400, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Problem Solver', description: 'Given to those who solve a difficult puzzle.', type: 'flightplan_completion', points: 350, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Perfectionist', description: 'Earned by achieving a perfect score.', type: 'task_completion', points: 600, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Marathon Runner', description: 'For completing an extended challenge.', type: 'experience_completion', points: 450, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Elite Champion', description: 'Awarded to tournament winners.', type: 'flightplan_completion', points: 800, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Legendary Status', description: 'The highest badge for exceptional performance.', type: 'task_completion', points: 1000, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() }
          ]);


          // Populate cliftonStrengths
          await queryInterface.bulkInsert('cliftonStrengths', [
            { name: 'Achiever', description: 'People especially talented in the Achiever theme have a great deal of stamina and work hard.', category: 'executing', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Activator', description: 'People especially talented in the Activator theme can make things happen by turning thoughts into action.', category: 'influencing', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Adaptability', description: 'People especially talented in the Adaptability theme prefer to go with the flow.', category: 'relationship_building', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Analytical', description: 'People especially talented in the Analytical theme search for reasons and causes.', category: 'strategic_thinking', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Arranger', description: 'People especially talented in the Arranger theme can organize, but they also have a flexibility that complements this ability.', category: 'executing', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Command', description: 'People especially talented in the Command theme have presence.', category: 'influencing', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Communication', description: 'People especially talented in the Communication theme generally find it easy to put their thoughts into words.', category: 'influencing', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Connectedness', description: 'People especially talented in the Connectedness theme have faith in the links between all things.', category: 'relationship_building', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Context', description: 'People especially talented in the Context theme enjoy thinking about the past.', category: 'strategic_thinking', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Deliberative', description: 'People especially talented in the Deliberative theme are best described by the serious care they take in making decisions or choices.', category: 'executing', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate experienceType
          await queryInterface.bulkInsert('experienceTypes', [
            { category: 'academic', type: 'automatic', req_reflection: true, schedule_type: 'one_time', name: 'Research Project', description: 'Participate in a faculty-led research project.', rational: 'Enhances critical thinking and research skills.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'leadership', type: 'manual', req_reflection: true, schedule_type: 'every_semester', name: 'Student Government', description: 'Serve in a leadership role in student government.', rational: 'Develops leadership and organizational skills.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'networking', type: 'automatic', req_reflection: false, schedule_type: 'special_event', name: 'Networking Event', description: 'Attend a professional networking event.', rational: 'Expands professional connections.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'strengths', type: 'manual', req_reflection: true, schedule_type: 'one_time', name: 'Strengths Assessment', description: 'Complete a strengths-based assessment.', rational: 'Helps identify personal strengths and growth areas.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'career_prep', type: 'automatic', req_reflection: false, schedule_type: 'one_time', name: 'Resume Workshop', description: 'Participate in a resume-building workshop.', rational: 'Improves job application materials.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'mentoring', type: 'manual', req_reflection: true, schedule_type: 'every_semester', name: 'Peer Mentoring', description: 'Serve as a mentor for a fellow student.', rational: 'Fosters leadership and interpersonal skills.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'volunteer', type: 'automatic', req_reflection: true, schedule_type: 'one_time', name: 'Community Service', description: 'Engage in a one-time community service project.', rational: 'Encourages civic responsibility.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'academic', type: 'manual', req_reflection: false, schedule_type: 'every_semester', name: 'Honors Program', description: 'Participate in an academic honors program.', rational: 'Enhances academic achievement.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'leadership', type: 'automatic', req_reflection: true, schedule_type: 'special_event', name: 'Leadership Summit', description: 'Attend a leadership development summit.', rational: 'Develops advanced leadership skills.', createdAt: new Date(), updatedAt: new Date() },
            { category: 'networking', type: 'manual', req_reflection: false, schedule_type: 'one_time', name: 'Alumni Mixer', description: 'Connect with alumni from your program.', rational: 'Builds professional relationships.', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate majors
          await queryInterface.bulkInsert('majors', [
            { name: 'Computer Science', description: 'Study of computers, algorithms, and software development.', department: 'Engineering', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Mechanical Engineering', description: 'Study of mechanical systems and design principles.', department: 'Engineering', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Electrical Engineering', description: 'Study of electrical systems, circuits, and energy.', department: 'Engineering', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Business Administration', description: 'Study of business management, operations, and economics.', department: 'Business', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Psychology', description: 'Study of human behavior and mental processes.', department: 'Humanities', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Biology', description: 'Study of living organisms and biological processes.', department: 'Science', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Mathematics', description: 'Study of mathematical theories, structures, and applications.', department: 'Science', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Chemistry', description: 'Study of chemical reactions, substances, and molecular structures.', department: 'Science', createdAt: new Date(), updatedAt: new Date() },
            { name: 'English Literature', description: 'Study of English language and literary works.', department: 'Humanities', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Political Science', description: 'Study of government systems, politics, and international relations.', department: 'Humanities', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate permissions
          await queryInterface.bulkInsert('permissions', [
            { type: 'user_maintenance', createdAt: new Date(), updatedAt: new Date() },
            { type: 'flightplan_maintenance', createdAt: new Date(), updatedAt: new Date() },
            { type: 'flightplan_approval', createdAt: new Date(), updatedAt: new Date() },
            { type: 'shop_maintenance', createdAt: new Date(), updatedAt: new Date() },
            { type: 'shop_approval', createdAt: new Date(), updatedAt: new Date() },
            { type: 'resume_reviewer', createdAt: new Date(), updatedAt: new Date() },
            { type: 'admin_view', createdAt: new Date(), updatedAt: new Date() },
            { type: 'student_view', createdAt: new Date(), updatedAt: new Date() },
            { type: 'professor_view', createdAt: new Date(), updatedAt: new Date() },
          ]);

          // Populate roles
          await queryInterface.bulkInsert('roles', [
            { role_type: 'admin', createdAt: new Date(), updatedAt: new Date() },
            { role_type: 'student', createdAt: new Date(), updatedAt: new Date() },
            { role_type: 'reviewer', createdAt: new Date(), updatedAt: new Date() },
            { role_type: 'student_worker', createdAt: new Date(), updatedAt: new Date() },
            { role_type: 'professor', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate semesters
          await queryInterface.bulkInsert('semesters', [
            { name: 'Fall 2023', start_date: new Date('2023-09-01'), end_date: new Date('2023-12-15'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Spring 2024', start_date: new Date('2024-01-15'), end_date: new Date('2024-05-10'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fall 2024', start_date: new Date('2024-09-01'), end_date: new Date('2024-12-15'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Spring 2025', start_date: new Date('2025-01-15'), end_date: new Date('2025-05-10'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fall 2025', start_date: new Date('2025-09-01'), end_date: new Date('2025-12-15'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Spring 2026', start_date: new Date('2026-01-15'), end_date: new Date('2026-05-10'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fall 2026', start_date: new Date('2026-09-01'), end_date: new Date('2026-12-15'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Spring 2027', start_date: new Date('2027-01-15'), end_date: new Date('2027-05-10'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Fall 2027', start_date: new Date('2027-09-01'), end_date: new Date('2027-12-15'), createdAt: new Date(), updatedAt: new Date() },
            { name: 'Spring 2028', start_date: new Date('2028-01-15'), end_date: new Date('2028-05-10'), createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate verifications
          await queryInterface.bulkInsert('verifications', [
            { type: 'automatic', google_form_url: 'http://example.com/verification-form1', createdAt: new Date(), updatedAt: new Date() },
            { type: 'semi_automatic', google_form_url: 'http://example.com/verification-form2', createdAt: new Date(), updatedAt: new Date() },
            { type: 'manual', google_form_url: 'http://example.com/verification-form3', createdAt: new Date(), updatedAt: new Date() },
            { type: 'automatic', google_form_url: null, createdAt: new Date(), updatedAt: new Date() },
            { type: 'semi_automatic', google_form_url: 'http://example.com/verification-form4', createdAt: new Date(), updatedAt: new Date() },
            { type: 'manual', google_form_url: 'http://example.com/verification-form5', createdAt: new Date(), updatedAt: new Date() },
            { type: 'automatic', google_form_url: null, createdAt: new Date(), updatedAt: new Date() },
            { type: 'manual', google_form_url: 'http://example.com/verification-form6', createdAt: new Date(), updatedAt: new Date() },
            { type: 'semi_automatic', google_form_url: 'http://example.com/verification-form7', createdAt: new Date(), updatedAt: new Date() },
            { type: 'automatic', google_form_url: 'http://example.com/verification-form8', createdAt: new Date(), updatedAt: new Date() }
          ]);
        }

        // Bridge Tables
        {
          // Populate badgeExperienceType
          await queryInterface.bulkInsert('badgeExperienceTypes', [
            { badgeId: 1, experienceTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 2, experienceTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 3, experienceTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 4, experienceTypeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 5, experienceTypeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 6, experienceTypeId: 6, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 8, experienceTypeId: 8, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 9, experienceTypeId: 9, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 10, experienceTypeId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate classes
          await queryInterface.bulkInsert('classes', [
            { course_number: 'CS101', course_name: 'Introduction to Computer Science', department: 'Computer Science', semesterId: 1, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'MATH201', course_name: 'Calculus II', department: 'Mathematics', semesterId: 1, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'ENG150', course_name: 'English Composition', department: 'English', semesterId: 2, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'HIST210', course_name: 'World History', department: 'History', semesterId: 2, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'PHYS101', course_name: 'Physics I', department: 'Physics', semesterId: 3, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'BIO110', course_name: 'Biology Basics', department: 'Biology', semesterId: 3, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'CHEM120', course_name: 'General Chemistry', department: 'Chemistry', semesterId: 4, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'ART105', course_name: 'Introduction to Art', department: 'Fine Arts', semesterId: 4, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'PSY200', course_name: 'Psychology Principles', department: 'Psychology', semesterId: 5, createdAt: new Date(), updatedAt: new Date() },
            { course_number: 'ECON101', course_name: 'Microeconomics', department: 'Economics', semesterId: 5, createdAt: new Date(), updatedAt: new Date() }
          ]);


          // Populate documents
          await queryInterface.bulkInsert('documents', [
            { name: 'Resume', completion_date: new Date('2024-01-15'), semester_approved: 'spring', image: null, studentId: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Cover Letter', completion_date: new Date('2024-02-10'), semester_approved: 'spring', image: null, studentId: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Internship Agreement', completion_date: new Date('2023-12-05'), semester_approved: 'fall', image: null, studentId: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Project Report', completion_date: new Date('2024-03-20'), semester_approved: 'spring', image: null, studentId: 4, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Research Paper', completion_date: new Date('2023-11-30'), semester_approved: 'fall', image: null, studentId: 5, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Portfolio', completion_date: new Date('2024-01-25'), semester_approved: 'spring', image: null, studentId: 6, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Reference Letter', completion_date: new Date('2024-02-15'), semester_approved: 'spring', image: null, studentId: 7, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Certification', completion_date: new Date('2023-10-20'), semester_approved: 'fall', image: null, studentId: 8, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Training Completion', completion_date: new Date('2024-04-05'), semester_approved: 'spring', image: null, studentId: 9, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Workshop Notes', completion_date: new Date('2023-09-15'), semester_approved: 'fall', image: null, studentId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate events
          await queryInterface.bulkInsert('events', [
            { name: 'Tech Career Fair', description: 'Meet top tech companies', event_type: 'career_fair', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Main Hall', attendance_type: 'in_person', registration: 'handshake', custom: false, status: 'scheduled', point_value: 10, verificationId: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'AI Workshop', description: 'Learn AI fundamentals', event_type: 'mentoring', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Room 101', attendance_type: 'online', registration: 'in_app', custom: false, status: 'scheduled', point_value: 15, verificationId: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Resume Review', description: 'Get feedback on your resume', event_type: 'career_services', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Career Center', attendance_type: 'in_person', registration: 'handshake', custom: false, status: 'scheduled', point_value: 5, verificationId: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Networking Lunch', description: 'Connect with professionals', event_type: 'lunch_and_learn', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Cafeteria', attendance_type: 'in_person', registration: 'in_app', custom: false, status: 'scheduled', point_value: 8, verificationId: 4, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Coding Bootcamp', description: 'Intensive coding session', event_type: 'extra_curricular', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Lab 202', attendance_type: 'online', registration: 'in_app', custom: false, status: 'scheduled', point_value: 20, verificationId: 5, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Leadership Seminar', description: 'Develop leadership skills', event_type: 'galup_strengths_class', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Auditorium', attendance_type: 'in_person', registration: 'handshake', custom: false, status: 'scheduled', point_value: 12, verificationId: 6, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Startup Pitch Night', description: 'Present your startup ideas', event_type: 'club', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Innovation Hub', attendance_type: 'in_person', registration: 'in_app', custom: false, status: 'scheduled', point_value: 18, verificationId: 7, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Financial Literacy Workshop', description: 'Learn financial skills', event_type: 'mentoring', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Room 305', attendance_type: 'online', registration: 'handshake', custom: false, status: 'scheduled', point_value: 10, verificationId: 8, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Career Coaching', description: 'One-on-one career coaching', event_type: 'career_services', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Career Office', attendance_type: 'in_person', registration: 'in_app', custom: false, status: 'scheduled', point_value: 6, verificationId: 9, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Tech Talk Series', description: 'Hear from industry leaders', event_type: 'lunch_and_learn', date: new Date(), start_date_time: new Date(), end_date_time: new Date(), location: 'Lecture Hall', attendance_type: 'online', registration: 'handshake', custom: false, status: 'scheduled', point_value: 14, verificationId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate experienceTypeMajor
          await queryInterface.bulkInsert('experienceTypeMajors', [
            { experienceTypeId: 1, majorId: 1, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 2, majorId: 2, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 3, majorId: 3, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 4, majorId: 4, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 5, majorId: 5, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 6, majorId: 6, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 7, majorId: 7, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 8, majorId: 8, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 9, majorId: 9, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 10, majorId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate flightPlans
          await queryInterface.bulkInsert('flightPlans', [
            { semesterId: 1, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 2, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 3, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 4, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 5, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 6, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 7, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 8, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 9, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate rolePermission
          await queryInterface.bulkInsert('rolePermissions', [
            { roleId: 1, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 1, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 2, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 3, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 4, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 5, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 5, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 5, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { roleId: 5, permissionId: 9, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentBadges
          await queryInterface.bulkInsert('studentBadges', [
            { date_acquired: new Date('2024-01-15'), studentId: 1, badgeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2024-02-10'), studentId: 2, badgeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2023-12-05'), studentId: 3, badgeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2024-03-20'), studentId: 4, badgeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2023-11-30'), studentId: 5, badgeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2024-01-25'), studentId: 6, badgeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2024-02-15'), studentId: 7, badgeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2023-10-20'), studentId: 8, badgeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2024-04-05'), studentId: 9, badgeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { date_acquired: new Date('2023-09-15'), studentId: 10, badgeId: 5, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentCliftonStrength
          await queryInterface.bulkInsert('studentCliftonStrengths', [
            { studentId: 1, cliftonStrengthId: 1, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, cliftonStrengthId: 2, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, cliftonStrengthId: 3, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, cliftonStrengthId: 4, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, cliftonStrengthId: 5, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, cliftonStrengthId: 6, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, cliftonStrengthId: 7, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, cliftonStrengthId: 8, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, cliftonStrengthId: 9, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, cliftonStrengthId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentExperienceType
          await queryInterface.bulkInsert('studentExperienceTypes', [
            { studentId: 1, experienceTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, experienceTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, experienceTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, experienceTypeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, experienceTypeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, experienceTypeId: 6, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, experienceTypeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, experienceTypeId: 8, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, experienceTypeId: 9, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, experienceTypeId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentMajor
          await queryInterface.bulkInsert('studentMajors', [
            { studentId: 1, majorId: 1, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, majorId: 2, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, majorId: 3, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, majorId: 4, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, majorId: 5, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, majorId: 6, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, majorId: 7, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, majorId: 8, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, majorId: 9, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, majorId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate task
          await queryInterface.bulkInsert('tasks', [
            { category: 'academic', reflection_required: true, schedule_type: 'semesterly', name: 'Advanced Programming', description: 'Study advanced programming concepts.', rationale: 'Important for computer science majors.', semester_from_grad: 3, point_value: 100, taskId: null, verificationId: 1, video_link: 'http://example.com/advanced-programming', createdAt: new Date(), updatedAt: new Date() },
            { category: 'leadership', reflection_required: false, schedule_type: 'one_time', name: 'Leadership Seminar', description: 'Attend a leadership seminar.', rationale: 'Develop leadership skills.', semester_from_grad: 2, point_value: 50, taskId: null, verificationId: 2, video_link: null, createdAt: new Date(), updatedAt: new Date() },
            { category: 'networking', reflection_required: true, schedule_type: 'special_event', name: 'Networking Event', description: 'Attend a professional networking event.', rationale: 'Expand professional network.', semester_from_grad: 1, point_value: 75, taskId: null, verificationId: 3, video_link: null, createdAt: new Date(), updatedAt: new Date() },
            { category: 'strengths', reflection_required: true, schedule_type: 'semesterly', name: 'Strengths Assessment', description: 'Complete a strengths assessment.', rationale: 'Understand personal strengths for career development.', semester_from_grad: 1, point_value: 60, taskId: null, verificationId: 4, video_link: 'http://example.com/strengths-assessment', createdAt: new Date(), updatedAt: new Date() },
            { category: 'career_prep', reflection_required: false, schedule_type: 'one_time', name: 'Resume Workshop', description: 'Attend a resume writing workshop.', rationale: 'Prepare a professional resume for job applications.', semester_from_grad: 2, point_value: 80, taskId: null, verificationId: 5, video_link: 'http://example.com/resume-workshop', createdAt: new Date(), updatedAt: new Date() },
            { category: 'mentoring', reflection_required: true, schedule_type: 'semesterly', name: 'Mentorship Program', description: 'Participate in a mentorship program.', rationale: 'Learn from an experienced professional in the field.', semester_from_grad: 3, point_value: 90, taskId: null, verificationId: 6, video_link: null, createdAt: new Date(), updatedAt: new Date() },
            { category: 'volunteer', reflection_required: false, schedule_type: 'semesterly', name: 'Community Service', description: 'Volunteer at a local charity or event.', rationale: 'Contribute to the community.', semester_from_grad: 4, point_value: 100, taskId: null, verificationId: 7, video_link: null, createdAt: new Date(), updatedAt: new Date() },
            { category: 'other', reflection_required: false, schedule_type: 'special_event', name: 'Hackathon Participation', description: 'Participate in a hackathon event.', rationale: 'Challenge yourself with a time-sensitive programming task.', semester_from_grad: 1, point_value: 120, taskId: null, verificationId: 8, video_link: 'http://example.com/hackathon', createdAt: new Date(), updatedAt: new Date() },
            { category: 'academic', reflection_required: true, schedule_type: 'semesterly', name: 'Machine Learning Course', description: 'Complete a machine learning course online.', rationale: 'Gain knowledge in a highly relevant field of study.', semester_from_grad: 2, point_value: 150, taskId: null, verificationId: 9, video_link: 'http://example.com/machine-learning', createdAt: new Date(), updatedAt: new Date() },
            { category: 'leadership', reflection_required: false, schedule_type: 'special_event', name: 'Leadership Conference', description: 'Attend a leadership conference in person.', rationale: 'Learn from leadership experts and network with peers.', semester_from_grad: 3, point_value: 110, taskId: 1, verificationId: 10, video_link: null, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate users
          await queryInterface.bulkInsert('users', [
            { fName: 'Anthony', lName: 'Pham', email: 'anthony.pham@eagles.oc.edu', phone_number: '123-456-7890', prefix: 'Mr.', studentId: 1, reviewerId: 1, adminId: 1, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Abby', lName: 'Crockett', email: 'abby.crockett@eagles.oc.edu', phone_number: '987-654-3210', prefix: 'Ms.', studentId: 2, reviewerId: 2, adminId: 2, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Bill', lName: 'Le', email: 'bill.le@eagles.oc.edu', phone_number: '555-123-4567', prefix: 'Mr.', studentId: 3, reviewerId: 3, adminId: 3, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Jenna', lName: 'Stilling', email: 'j.stilling@eagles.oc.edu', phone_number: '444-789-1234', prefix: 'Ms.', studentId: 4, reviewerId: 4, adminId: 4, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Arrian', lName: 'Taton', email: 'arrian.taton@eagles.oc.edu', phone_number: '222-333-4444', prefix: 'Ms.', studentId: 5, reviewerId: 5, adminId: 5, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Dana', lName: 'Davis', email: 'dana.davis@example.com', phone_number: '111-222-3333', prefix: 'Ms.', studentId: null, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Eve', lName: 'Martin', email: 'eve.martin@example.com', phone_number: '666-555-4444', prefix: 'Dr.', studentId: 6, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Frank', lName: 'Garcia', email: 'frank.garcia@example.com', phone_number: '777-888-9999', prefix: 'Mr.', studentId: null, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Grace', lName: 'Rodriguez', email: 'grace.rodriguez@example.com', phone_number: '999-888-7777', prefix: 'Ms.', studentId: 7, createdAt: new Date(), updatedAt: new Date() },
            { fName: 'Hannah', lName: 'Martinez', email: 'hannah.martinez@example.com', phone_number: '333-222-1111', prefix: 'Mrs.', studentId: 8, createdAt: new Date(), updatedAt: new Date() }
          ]);
        }

        // Bridge Tables +
        {
          // Populate experienceTypeEvent
          await queryInterface.bulkInsert('experienceTypeEvents', [
            { experienceTypeId: 1, eventId: 1, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 2, eventId: 2, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 3, eventId: 3, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 4, eventId: 4, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 5, eventId: 5, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 6, eventId: 6, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 7, eventId: 7, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 8, eventId: 8, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 9, eventId: 9, createdAt: new Date(), updatedAt: new Date() },
            { experienceTypeId: 10, eventId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate eventCliftonStrength
          await queryInterface.bulkInsert('eventCliftonStrengths', [
            { eventId: 1, cliftonStrengthId: 1, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 2, cliftonStrengthId: 2, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 3, cliftonStrengthId: 3, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 4, cliftonStrengthId: 4, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 5, cliftonStrengthId: 5, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 6, cliftonStrengthId: 6, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 7, cliftonStrengthId: 7, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 8, cliftonStrengthId: 8, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 9, cliftonStrengthId: 9, createdAt: new Date(), updatedAt: new Date() },
            { eventId: 10, cliftonStrengthId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate flightPlanExperienceType
          await queryInterface.bulkInsert('flightPlanExperienceTypes', [
            { flightPlanId: 1, experienceTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 2, experienceTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 3, experienceTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 4, experienceTypeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 5, experienceTypeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 6, experienceTypeId: 6, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 7, experienceTypeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 8, experienceTypeId: 8, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 9, experienceTypeId: 9, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 10, experienceTypeId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate flightPlanTask
          await queryInterface.bulkInsert('flightPlanTasks', [
            { flightPlanId: 1, taskId: 1, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 2, taskId: 2, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 3, taskId: 3, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 4, taskId: 4, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 5, taskId: 5, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 6, taskId: 6, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 7, taskId: 7, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 8, taskId: 8, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 9, taskId: 9, createdAt: new Date(), updatedAt: new Date() },
            { flightPlanId: 10, taskId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate professorClass
          await queryInterface.bulkInsert('professorClasses', [
            { userId: 1, classId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 9, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, classId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentClasses
          await queryInterface.bulkInsert('studentClasses', [
            { semester: 1, studentId: 1, classId: 1, createdAt: new Date(), updatedAt: new Date() },
            { semester: 2, studentId: 2, classId: 2, createdAt: new Date(), updatedAt: new Date() },
            { semester: 3, studentId: 3, classId: 3, createdAt: new Date(), updatedAt: new Date() },
            { semester: 1, studentId: 4, classId: 4, createdAt: new Date(), updatedAt: new Date() },
            { semester: 2, studentId: 5, classId: 5, createdAt: new Date(), updatedAt: new Date() },
            { semester: 3, studentId: 6, classId: 1, createdAt: new Date(), updatedAt: new Date() },
            { semester: 1, studentId: 7, classId: 2, createdAt: new Date(), updatedAt: new Date() },
            { semester: 2, studentId: 8, classId: 3, createdAt: new Date(), updatedAt: new Date() },
            { semester: 3, studentId: 9, classId: 4, createdAt: new Date(), updatedAt: new Date() },
            { semester: 1, studentId: 10, classId: 5, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentExperienceTypeEvents
          await queryInterface.bulkInsert('studentExperienceTypeEvents', [
            { studentExperienceTypeId: 1, eventId: 1, userId: 1, points_earned: 10, completed_date: new Date('2025-01-15'), unapprove_reason: null, reflection_text: 'This event helped me develop teamwork and leadership skills.', status: 'approved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 2, eventId: 2, userId: 2, points_earned: 8, completed_date: new Date('2025-02-01'), unapprove_reason: null, reflection_text: 'I gained valuable insights into the project management process.', status: 'ready_for_review', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 3, eventId: 3, userId: 3, points_earned: 15, completed_date: new Date('2025-01-30'), unapprove_reason: 'Did not meet minimum requirements.', reflection_text: 'The event was engaging, but I did not complete all the tasks.', status: 'unapproved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 4, eventId: 4, userId: 4, points_earned: 20, completed_date: new Date('2025-01-25'), unapprove_reason: null, reflection_text: 'The hands-on experience was invaluable for my learning.', status: 'approved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 5, eventId: 5, userId: 5, points_earned: 5, completed_date: new Date('2025-02-10'), unapprove_reason: null, reflection_text: 'It was a good experience, though I felt I could have done more.', status: 'in_progress', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 1, eventId: 6, userId: 6, points_earned: 12, completed_date: new Date('2025-01-18'), unapprove_reason: null, reflection_text: 'This event gave me a deeper understanding of communication skills.', status: 'approved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 2, eventId: 7, userId: 7, points_earned: 9, completed_date: new Date('2025-02-05'), unapprove_reason: null, reflection_text: 'I learned a lot about data analysis and its applications.', status: 'ready_for_review', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 3, eventId: 8, userId: 8, points_earned: 14, completed_date: new Date('2025-01-22'), unapprove_reason: 'Failed to submit final report.', reflection_text: 'While I enjoyed the event, I did not complete all the required tasks.', status: 'unapproved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 4, eventId: 9, userId: 9, points_earned: 18, completed_date: new Date('2025-02-03'), unapprove_reason: null, reflection_text: 'This experience sharpened my problem-solving and critical thinking abilities.', status: 'approved', createdAt: new Date(), updatedAt: new Date() },
            { studentExperienceTypeId: 5, eventId: 10, userId: 10, points_earned: 7, completed_date: new Date('2025-02-08'), unapprove_reason: null, reflection_text: 'I gained hands-on experience, but there was room for improvement.', status: 'in_progress', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate studentFlightPlan
          await queryInterface.bulkInsert('studentFlightPlans', [
            { studentId: 1, flightPlanId: 1, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, flightPlanId: 2, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, flightPlanId: 3, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, flightPlanId: 4, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, flightPlanId: 5, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, flightPlanId: 6, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, flightPlanId: 7, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, flightPlanId: 8, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, flightPlanId: 9, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, flightPlanId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate taskBadge
          await queryInterface.bulkInsert('taskBadges', [
            { taskId: 1, badgeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 2, badgeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 3, badgeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 4, badgeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 5, badgeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 6, badgeId: 6, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 7, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 8, badgeId: 8, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 9, badgeId: 9, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 10, badgeId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate taskCliftonStrength
          await queryInterface.bulkInsert('taskCliftonStrengths', [
            { taskId: 1, cliftonStrengthId: 1, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 2, cliftonStrengthId: 2, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 3, cliftonStrengthId: 3, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 4, cliftonStrengthId: 4, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 5, cliftonStrengthId: 5, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 6, cliftonStrengthId: 6, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 7, cliftonStrengthId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 8, cliftonStrengthId: 8, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 9, cliftonStrengthId: 9, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 10, cliftonStrengthId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate taskMajor
          await queryInterface.bulkInsert('taskMajors', [
            { taskId: 1, majorId: 1, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 2, majorId: 2, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 3, majorId: 3, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 4, majorId: 4, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 5, majorId: 5, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 6, majorId: 6, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 7, majorId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 8, majorId: 8, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 9, majorId: 9, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 10, majorId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate transactions
          await queryInterface.bulkInsert('transactions', [
            { points_spent: 100, date_approved: new Date(), userId: 1, studentId: 1, awardId: 1, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 200, date_approved: new Date(), userId: 2, studentId: 2, awardId: 2, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 150, date_approved: new Date(), userId: 3, studentId: 3, awardId: 3, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 250, date_approved: new Date(), userId: 4, studentId: 4, awardId: 4, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 300, date_approved: new Date(), userId: 5, studentId: 5, awardId: 5, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 180, date_approved: new Date(), userId: 6, studentId: 6, awardId: 1, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 220, date_approved: new Date(), userId: 7, studentId: 7, awardId: 2, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 275, date_approved: new Date(), userId: 8, studentId: 8, awardId: 3, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 125, date_approved: new Date(), userId: 9, studentId: 9, awardId: 4, createdAt: new Date(), updatedAt: new Date() },
            { points_spent: 90, date_approved: new Date(), userId: 10, studentId: 10, awardId: 5, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate userRole
          await queryInterface.bulkInsert('userRoles', [
            { userId: 1, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 5, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 6, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userId: 7, roleId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userId: 8, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userId: 9, roleId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userId: 10, roleId: 5, createdAt: new Date(), updatedAt: new Date() }
          ]);
        }

        //Bridge Tables *
        {
          // Populate studentFlightPlanTasks
          await queryInterface.bulkInsert('studentFlightPlanTasks', [
            { studentFlightPlanId: 1, taskId: 1, userId: 1, points_earned: 10, completed_date: new Date('2025-01-15'), unapprove_reason: null, status: 'approved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 1' },
            { studentFlightPlanId: 2, taskId: 2, userId: 2, points_earned: 8, completed_date: new Date('2025-02-01'), unapprove_reason: null, status: 'ready_for_review', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 2' },
            { studentFlightPlanId: 3, taskId: 3, userId: 3, points_earned: 12, completed_date: new Date('2025-01-20'), unapprove_reason: 'Did not meet minimum criteria.', status: 'unapproved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 3' },
            { studentFlightPlanId: 4, taskId: 4, userId: 4, points_earned: 15, completed_date: new Date('2025-01-22'), unapprove_reason: null, status: 'approved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 4'},
            { studentFlightPlanId: 5, taskId: 5, userId: 5, points_earned: 5, completed_date: new Date('2025-02-10'), unapprove_reason: null, status: 'in_progress', createdAt: new Date(), updatedAt: new Date(), reflection: null },
            { studentFlightPlanId: 6, taskId: 6, userId: 6, points_earned: 10, completed_date: new Date('2025-01-18'), unapprove_reason: null, status: 'approved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 6' },
            { studentFlightPlanId: 7, taskId: 7, userId: 7, points_earned: 9, completed_date: new Date('2025-02-05'), unapprove_reason: null, status: 'ready_for_review', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 7' },
            { studentFlightPlanId: 8, taskId: 8, userId: 8, points_earned: 11, completed_date: new Date('2025-01-25'), unapprove_reason: null, status: 'approved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 8' },
            { studentFlightPlanId: 9, taskId: 9, userId: 9, points_earned: 14, completed_date: new Date('2025-01-30'), unapprove_reason: 'Failed to meet deadline.', status: 'unapproved', createdAt: new Date(), updatedAt: new Date(), reflection: 'Reflection 9' },
            { studentFlightPlanId: 10, taskId: 10, userId: 10, points_earned: 6, completed_date: new Date('2025-02-08'), unapprove_reason: null, status: 'in_progress', createdAt: new Date(), updatedAt: new Date(), reflection: null }
          ]);

          // Populate userRolePermissions
          await queryInterface.bulkInsert('userRolePermissions', [
            { userRoleId: 1, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 1, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },

            { userRoleId: 2, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 2, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },

            { userRoleId: 3, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 3, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },

            { userRoleId: 4, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 4, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },

            { userRoleId: 5, permissionId: 1, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 2, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 3, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 4, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 5, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 6, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 7, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 8, createdAt: new Date(), updatedAt: new Date() },
            { userRoleId: 5, permissionId: 9, createdAt: new Date(), updatedAt: new Date() },
          ]);
        }
      }
      // Resume Builder
      {
        // Nondependent Tables
        {
          //roles are in flight-plan section, so only students is needed here
          // Populate students
            await queryInterface.bulkInsert('students', [
            { address: '123 Magnolia St, New Orelans, LA', graduation_date: new Date('2026-05-02'), points: 78, student_issued_id: '128456', createdAt: new Date(), updatedAt: new Date() },
            { address: '456 Elm St, Metropolis, NY', graduation_date: new Date('2025-12-13'), points: 78, student_issued_id: '134567', createdAt: new Date(), updatedAt: new Date() },
            { address: '789 Maple Ave, Gotham, NJ', graduation_date: new Date('2027-04-25'), points: 78, student_issued_id: '145678', createdAt: new Date(), updatedAt: new Date() },
            { address: '101 Oak Blvd, Star City, CA', graduation_date: new Date('2026-12-13'), points: 78, student_issued_id: '156789', createdAt: new Date(), updatedAt: new Date() },
            { address: '202 Pine Rd, Central City, TX', graduation_date: new Date('2025-05-02'), points: 78, student_issued_id: '167890', createdAt: new Date(), updatedAt: new Date() },
            { address: '303 Cedar Ln, Coast City, FL', graduation_date: new Date('2027-12-13'), points: 78, student_issued_id: '178901', createdAt: new Date(), updatedAt: new Date() },
            { address: '404 Birch Dr, Fawcett City, OH', graduation_date: new Date('2026-04-25'), points: 78, student_issued_id: '189012', createdAt: new Date(), updatedAt: new Date() },
            { address: '505 Spruce Ct, Gateway City, AZ', graduation_date: new Date('2025-04-25'), points: 78, student_issued_id: '190123', createdAt: new Date(), updatedAt: new Date() },
            { address: '606 Ash Ave, Ivy Town, WA', graduation_date: new Date('2027-05-02'), points: 78, student_issued_id: '201234', createdAt: new Date(), updatedAt: new Date() },
            { address: '707 Sycamore Pl, Midway City, CO', graduation_date: new Date('2026-12-13'), points: 78, student_issued_id: '212345', createdAt: new Date(), updatedAt: new Date() }
            ]);
        }
        // Bridge Tables
        {
          //certifications, education, experiences, interests, links, projects, resumeReviews, skills

          // Populate certifications
          await queryInterface.bulkInsert('certifications', [
            { studentId: 1, name: 'Security+', company: 'CompTIA', date_acquired: new Date('2024-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, name: 'Network+', company: 'CompTIA', date_acquired: new Date('2023-12-13'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, name: 'A+', company: 'CompTIA', date_acquired: new Date('2025-02-25'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, name: 'CCNA', company: 'Cisco', date_acquired: new Date('2024-12-13'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, name: 'CEH', company: 'EC-Council', date_acquired: new Date('2023-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, name: 'CISSP', company: 'ISC2', date_acquired: new Date('2025-01-13'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, name: 'PMP', company: 'PMI', date_acquired: new Date('2024-04-25'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, name: 'CAPM', company: 'PMI', date_acquired: new Date('2023-04-25'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, name: 'ITIL', company: 'AXELOS', date_acquired: new Date('2025-01-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, name: 'AWS Certified Solutions Architect', company: 'Amazon Web Services', date_acquired: new Date('2024-12-13'), createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate education
          await queryInterface.bulkInsert('education', [
            { studentId: 1, degree: 'BS in Computer Science with Cybersecurity', institution: 'Oklahoma Christian University', gpa: 4.0, graduation_date: new Date('2025-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, degree: 'BS in Computer Science with Cybersecurity', institution: 'Oklahoma Christian University', gpa: 3.9, graduation_date: new Date('2024-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, degree: 'MS in Computer Science', institution: 'Oklahoma Christian University', gpa: 4.0, graduation_date: new Date('2025-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, degree: 'MS in Computer Science', institution: 'Oklahoma Christian University', gpa: 4.0, graduation_date: new Date('2025-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, degree: 'MS in Computer Science', institution: 'Oklahoma Christian University', gpa: 3.6, graduation_date: new Date('2024-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, degree: 'BS in Cybersecurity', institution: 'University of Florida', gpa: 3.8, graduation_date: new Date('2026-12-13'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, degree: 'BS in Project Management', institution: 'University of Miami', gpa: 3.9, graduation_date: new Date('2025-04-25'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, degree: 'BS in Business Administration', institution: 'University of South Florida', gpa: 3.7, graduation_date: new Date('2023-12-13'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, degree: 'BS in Information Systems Management', institution: 'University of Texas at Dallas', gpa: 3.6, graduation_date: new Date('2026-05-02'), createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, degree: 'BS in Computer Science with Software Engineering', institution: 'University of Washington', gpa: 3.8, graduation_date: new Date('2024-12-13'), createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate experiences
          await queryInterface.bulkInsert('experiences', [
            { studentId: 1, role: 'Cybersecurity Analyst', company: 'Tinker AFB', start_date: new Date('2025-05-02'), end_date: new Date('2026-05-02'), job_description: 'Analyzed and monitored network traffic for potential security threats.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, role: 'Network Engineer', company: 'Boeing', start_date: new Date('2024-12-13'), end_date: new Date('2025-12-13'), job_description: 'Designed and implemented network infrastructure for new office buildings.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, role: 'Software Developer', company: 'Google', start_date: new Date('2026-04-25'), end_date: new Date('2027-04-25'), job_description: 'Developed new features for Google Chrome browser.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, role: 'Data Analyst', company: 'NASA', start_date: new Date('2025-12-13'), end_date: new Date('2026-12-13'), job_description: 'Analyzed data from Mars Rover missions to identify patterns and trends.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, role: 'Software Engineer', company: 'Microsoft', start_date: new Date('2024-05-02'), end_date: new Date('2025-05-02'), job_description: 'Developed new features for Windows operating system.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, role: 'Cybersecurity Analyst', company: 'Lockheed Martin', start_date: new Date('2026-12-13'), end_date: new Date('2027-12-13'), job_description: 'Conducted security assessments and penetration testing on client networks.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, role: 'Project Manager', company: 'Booz Allen Hamilton', start_date: new Date('2025-04-25'), end_date: new Date('2026-04-25'), job_description: 'Managed multiple projects for government clients.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, role: 'Business Analyst', company: 'Deloitte', start_date: new Date('2023-12-13'), end_date: new Date('2024-12-13'), job_description: 'Analyzed business processes and recommended improvements.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, role: 'Systems Analyst', company: 'Accenture', start_date: new Date('2026-05-02'), end_date: new Date('2027-05-02'), job_description: 'Designed and implemented new systems for client organizations.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, role: 'Software Developer', company: 'Amazon', start_date: new Date('2024-12-13'), end_date: new Date('2025-12-13'), job_description: 'Developed new features for Amazon Web Services cloud platform.', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate interests
          await queryInterface.bulkInsert('interests', [
            { studentId: 1, name: 'Cybersecurity', description: 'Interested in learning about the latest cybersecurity threats and defenses.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, name: 'Networking', description: 'Passionate about designing and implementing network infrastructure.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, name: 'Software Development', description: 'Enjoys coding and building new software applications.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, name: 'Data Analysis', description: 'Fascinated by data and its potential to drive decision-making.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, name: 'Software Engineering', description: 'Loves designing and building software systems.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, name: 'Penetration Testing', description: 'Enjoys finding and fixing security vulnerabilities in networks.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, name: 'Project Management', description: 'Passionate about leading teams and delivering successful projects.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, name: 'Business Analysis', description: 'Interested in analyzing business processes and improving efficiency.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, name: 'Systems Analysis', description: 'Enjoys designing and implementing new systems for organizations.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, name: 'Cloud Computing', description: 'Passionate about building and managing cloud-based services.', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate links
          await queryInterface.bulkInsert('links', [
            { studentId: 1, name: 'LinkedIn', link: 'https://www.linkedin.com/in/anthonypham', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, name: 'GitHub', link: 'https://www.github.com/abbycrockett', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, name: 'Portfolio', link: 'https://www.bill-le.com', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, name: 'LinkedIn', link: 'https://www.linkedin.com/in/jennastilling', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, name: 'GitHub', link: 'https://www.github.com/arriantaton', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, name: 'Portfolio', link: 'https://www.danadavis.com', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, name: 'LinkedIn', link: 'https://www.linkedin.com/in/evemartin', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, name: 'GitHub', link: 'https://www.github.com/frankg', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, name: 'Portfolio', link: 'https://www.gracer.com', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, name: 'LinkedIn', link: 'https://www.linkedin.com/in/hannah-martinez', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate projects
          await queryInterface.bulkInsert('projects', [
            { studentId: 1, name: 'Network Security Project', description: 'Designed & implemented a secure network for a small business.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, name: 'Web Development Project', description: 'Built a responsive website for a local nonprofit organization.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, name: 'Machine Learning Project', description: 'Developed a model to predict stock prices using historical data.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, name: 'Data Analysis Project', description: 'Analyzed customer data to identify trends and improve marketing strategies.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, name: 'Software Development Project', description: 'Built a mobile app for tracking fitness goals and progress.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, name: 'Penetration Testing Project', description: 'Conducted security assessments on a client network to identify vulnerabilities.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, name: 'Project Management Project', description: 'Led a team to successfully deliver a software development project on time and within budget.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, name: 'Business Analysis Project', description: 'Analyzed business processes to identify inefficiencies and recommend improvements.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, name: 'Systems Analysis Project', description: 'Designed and implemented a new system for managing customer data.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, name: 'Cloud Computing Project', description: 'Built a cloud-based application for storing and sharing files.', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeReviews?
          await queryInterface.bulkInsert('resumeReviews', [
            { studentId: 1, notes: 'Is this resume good for intership at Paycom?', suggestion: 'Great resume! Very well-organized and easy to read.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, notes: 'Is this resume good for intership at Google?', suggestion: 'Good resume. Could use more details about projects and experiences.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, notes: 'Is this resume good for intership at Microsoft?', suggestion: 'Needs improvement. Work on formatting and content.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, notes: 'Is this resume good for intership at Amazon?', suggestion: 'Excellent resume! Very impressive experiences and projects.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, notes: 'Is this resume good for intership at Facebook?', suggestion: 'Good start. Add more details about skills and certifications.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, notes: 'Is this resume good for intership at Apple?', suggestion: 'Needs work. Focus on highlighting key experiences and skills.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, notes: 'Is this resume good for intership at Tesla?', suggestion: 'Great resume! Very well-organized and easy to read.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, notes: 'Is this resume good for intership at SpaceX?', suggestion: 'Good resume. Could use more details about projects and experiences.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, notes: 'Is this resume good for intership at IBM?', suggestion: 'Needs improvement. Work on formatting and content.', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, notes: 'Is this resume good for intership at Intel?', suggestion: 'Excellent resume! Very impressive experiences and projects.', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate skills
          await queryInterface.bulkInsert('skills', [
            { studentId: 1, name: 'Network Security', description: 'Expert', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 2, name: 'Web Development', description: 'Advanced', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 3, name: 'Machine Learning', description: 'Intermediate', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 4, name: 'Data Analysis', description: 'Expert', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 5, name: 'Software Development', description: 'Beginner', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 6, name: 'Penetration Testing', description: 'Expert', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 7, name: 'Project Management', description: 'Advanced', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 8, name: 'Business Analysis', description: 'Beginner', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 9, name: 'Systems Analysis', description: 'Intermediate', createdAt: new Date(), updatedAt: new Date() },
            { studentId: 10, name: 'Cloud Computing', description: 'Advanced', createdAt: new Date(), updatedAt: new Date() }
          ]);
        }
        // Bridge Tables +
        {
          //courses, resumes, resumeCertifications, resumeEducations, resumeExperiences, resumeInterests
          //resumeLinks, resumeProjects, resumeSkills, & userResumeReviews

          // Populate courses
          await queryInterface.bulkInsert('courses', [
            { educationId: 1, studentId: 1, name: 'Introduction to Cybersecurity', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 1, studentId: 1, name: 'Network Security', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 1, studentId: 1, name: 'Parallel Programming', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 2, studentId: 2, name: 'Parallel Programming', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 2, studentId: 2, name: 'Network Security', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 2, studentId: 2, name: 'Software Engineering IV', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 3, studentId: 3, name: 'Data Structures & Algorithms', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 3, studentId: 3, name: 'Data Mining', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 3, studentId: 3, name: 'Machine Learning', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 4, studentId: 4, name: 'Data Mining', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 4, studentId: 4, name: 'Data Structures & Algorithms', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 4, studentId: 4, name: 'Software Engineering IV', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 5, studentId: 5, name: 'Software Engineering III', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 5, studentId: 5, name: 'Introudction to AI', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 6, studentId: 6, name: 'Penetration Testing', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 7, studentId: 7, name: 'Project Management', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 8, studentId: 8, name: 'Business Analysis', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 9, studentId: 9, name: 'Systems Analysis', grade: 'A', createdAt: new Date(), updatedAt: new Date() },
            { educationId: 10, studentId: 10, name: 'Cloud Computing', grade: 'A', createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumes
          await queryInterface.bulkInsert('resumes', [
            { resumeReviewId: 1, studentId: 1, name: 'Anthony Pham Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 2, studentId: 2, name: 'Abby Crockett Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 3, studentId: 3, name: 'Bill Le Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 4, studentId: 4, name: 'Jenna Stilling Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 5, studentId: 5, name: 'Arrian Taton Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 6, studentId: 6, name: 'Dana Davis Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 7, studentId: 7, name: 'Eve Martin Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 8, studentId: 8, name: 'Frank G Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 9, studentId: 9, name: 'Grace R Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeReviewId: 10, studentId: 10, name: 'Hannah Martinez Resume', template_type: 1, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeCertifications
          await queryInterface.bulkInsert('resumeCertifications', [
            { resumeId: 1, certificationId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 1, certificationId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, certificationId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, certificationId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, certificationId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, certificationId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, certificationId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, certificationId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, certificationId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, certificationId: 10, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, certificationId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, certificationId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, certificationId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, certificationId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, certificationId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, certificationId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, certificationId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, certificationId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, certificationId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, certificationId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeEducations
          await queryInterface.bulkInsert('resumeEducations', [
            { resumeId: 1, educationId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, educationId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, educationId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, educationId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, educationId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, educationId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, educationId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, educationId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, educationId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, educationId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeExperiences
          await queryInterface.bulkInsert('resumeExperiences', [
            { resumeId: 1, experienceId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, experienceId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, experienceId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, experienceId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, experienceId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, experienceId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, experienceId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, experienceId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, experienceId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, experienceId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeInterests
          await queryInterface.bulkInsert('resumeInterests', [
            { resumeId: 1, interestId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, interestId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, interestId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, interestId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, interestId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, interestId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, interestId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, interestId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, interestId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, interestId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeLinks
          await queryInterface.bulkInsert('resumeLinks', [
            { resumeId: 1, linkId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, linkId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, linkId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, linkId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, linkId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, linkId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, linkId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, linkId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, linkId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, linkId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeProjects
          await queryInterface.bulkInsert('resumeProjects', [
            { resumeId: 1, projectId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, projectId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, projectId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, projectId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, projectId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, projectId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, projectId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, projectId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, projectId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, projectId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate resumeSkills
          await queryInterface.bulkInsert('resumeSkills', [
            { resumeId: 1, skillId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, skillId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, skillId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, skillId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, skillId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, skillId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, skillId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, skillId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, skillId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, skillId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);

          // Populate userResumeReviews
          await queryInterface.bulkInsert('userResumeReviews', [
            {userId: 1, resumeReviewId: 1, createdAt: new Date(), updatedAt: new Date() },
            {userId: 2, resumeReviewId: 2, createdAt: new Date(), updatedAt: new Date() },
            {userId: 3, resumeReviewId: 3, createdAt: new Date(), updatedAt: new Date() },
            {userId: 4, resumeReviewId: 4, createdAt: new Date(), updatedAt: new Date() },
            {userId: 5, resumeReviewId: 5, createdAt: new Date(), updatedAt: new Date() },
            {userId: 6, resumeReviewId: 6, createdAt: new Date(), updatedAt: new Date() },
            {userId: 7, resumeReviewId: 7, createdAt: new Date(), updatedAt: new Date() },
            {userId: 8, resumeReviewId: 8, createdAt: new Date(), updatedAt: new Date() },
            {userId: 9, resumeReviewId: 9, createdAt: new Date(), updatedAt: new Date() },
            {userId: 10, resumeReviewId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);
        }
        // Bridge Tables *
        {
          //resumeCourses
          await queryInterface.bulkInsert('resumeCourses', [
            { resumeId: 1, educationId: 1, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 2, educationId: 2, courseId: 2, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 3, educationId: 3, courseId: 3, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 4, educationId: 4, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 5, educationId: 5, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 6, educationId: 6, courseId: 6, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 7, educationId: 7, courseId: 7, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 8, educationId: 8, courseId: 8, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 9, educationId: 9, courseId: 9, createdAt: new Date(), updatedAt: new Date() },
            { resumeId: 10, educationId: 10, courseId: 10, createdAt: new Date(), updatedAt: new Date() }
          ]);
        }
      }
    }
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    // Eagle Flight Plan
    {
      // Nondependent Tables
      {
        await queryInterface.bulkDelete('awards', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('badges', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('cliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('experienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('majors', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('permissions', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('roles', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('students', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('semesters', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('verifications', null, { truncate: true, cascade: true, restartIdentity: true });
      }

      // Bridge Tables
      {
        await queryInterface.bulkDelete('badgeExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('classes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('documents', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('events', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('experienceTypeMajors', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('flightPlans', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('rolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentBadges', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentMajors', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('tasks', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });
      }

      // Bridge Tables +
      {
        await queryInterface.bulkDelete('experienceTypeEvents', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('eventCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('flightPlanExperienceTypes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('flightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('professorClasses', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentClasses', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentExperienceTypeEvents', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('studentFlightPlans', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('taskBadges', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('taskCliftonStrengths', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('taskMajors', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('transactions', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('userRoles', null, { truncate: true, cascade: true, restartIdentity: true });
      }

      // Bridge Tables *
      {
        await queryInterface.bulkDelete('studentFlightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('userRolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
      }
    }
    // Resume Builder
    {
      // Nondependent Tables
      {
        await queryInterface.bulkDelete('adminRoles', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('reviewerRoles', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('roles', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('students', null, { truncate: true, cascade: true, restartIdentity: true });
      }
      // Bridge Tables
      {
        await queryInterface.bulkDelete('certifications', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('education', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('experiences', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('interests', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('links', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('projects', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeReviews', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('skills', null, { truncate: true, cascade: true, restartIdentity: true });
      }
      // Bridge Tables +
      {
        await queryInterface.bulkDelete('courses', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumes', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeCertifications', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeEducations', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeExperiences', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeInterests', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeLinks', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeProjects', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('resumeSkills', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('userResumeReviews', null, { truncate: true, cascade: true, restartIdentity: true });
      }
      // Bridge Tables *
      {
        await queryInterface.bulkDelete('resumeCourses', null, { truncate: true, cascade: true, restartIdentity: true });
      }
    }
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  }
};
