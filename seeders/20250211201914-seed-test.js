'use strict';

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

        }
        // Bridge Tables
        {

        }
        // Bridge Tables +
        {

        }
        // Bridge Tables *
        {

        }
      }
    }
    // Populate Tables
    {
      // Nondependent Tables
      {
        // Populate awards
        await queryInterface.bulkInsert('awards', [
          { name: 'Excellence in Innovation', description: 'Awarded for outstanding innovative solutions.', cost: 500, redemption_type: 'online', redemption_info: 'Redeem via email confirmation.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Leadership Award', description: 'Recognizing exceptional leadership qualities.', cost: 700, redemption_type: 'in_person', redemption_info: 'Available at the front desk.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Community Impact Award', description: 'For making a significant impact in the community.', cost: 1000, redemption_type: 'online', redemption_info: 'Will be mailed to the recipient.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Employee of the Month', description: 'Awarded to the best-performing employee of the month.', cost: 300, redemption_type: 'in_person', redemption_info: 'Collect at HR office.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Customer Service Excellence', description: 'Recognizing outstanding customer service skills.', cost: 450, redemption_type: 'online', redemption_info: 'E-certificate will be emailed.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Top Performer Award', description: 'Awarded to top-performing employees annually.', cost: 800, redemption_type: 'in_person', redemption_info: 'To be awarded at the annual ceremony.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Best Team Player', description: 'Given to individuals who demonstrate teamwork and collaboration.', cost: 600, redemption_type: 'online', redemption_info: 'E-certificate and gift card via email.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Dedication Award', description: 'For employees who have shown dedication over the years.', cost: 750, redemption_type: 'in_person', redemption_info: 'Receive at the annual gala.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Innovation Challenge Winner', description: 'For employees who contribute the best ideas in company challenges.', cost: 950, redemption_type: 'online', redemption_info: 'Cash prize and certificate sent via email.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
          { name: 'Most Valuable Player', description: 'Awarded to the most impactful contributor in a given year.', cost: 1200, redemption_type: 'in_person', redemption_info: 'Presented at the annual award ceremony.', image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() }
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
          { role_type: 'professor', createdAt: new Date(), updatedAt: new Date() },
        ]);

        // Populate students
        await queryInterface.bulkInsert('students', [
          { address: '123 Main St, Springfield, IL', graduation_date: new Date('2026-05-15'), points: 500, student_issued_id: 'S1001', createdAt: new Date(), updatedAt: new Date() },
          { address: '456 Oak Ave, Chicago, IL', graduation_date: new Date('2025-12-10'), points: 320, student_issued_id: 'S1002', createdAt: new Date(), updatedAt: new Date() },
          { address: '789 Pine Rd, Austin, TX', graduation_date: new Date('2027-06-20'), points: 700, student_issued_id: 'S1003', createdAt: new Date(), updatedAt: new Date() },
          { address: '101 Birch Ln, Denver, CO', graduation_date: new Date('2026-08-30'), points: 450, student_issued_id: 'S1004', createdAt: new Date(), updatedAt: new Date() },
          { address: '202 Maple St, Seattle, WA', graduation_date: new Date('2025-11-25'), points: 600, student_issued_id: 'S1005', createdAt: new Date(), updatedAt: new Date() },
          { address: '303 Cedar Ave, Miami, FL', graduation_date: new Date('2028-09-10'), points: 350, student_issued_id: 'S1006', createdAt: new Date(), updatedAt: new Date() },
          { address: '404 Elm St, Boston, MA', graduation_date: new Date('2027-04-05'), points: 800, student_issued_id: 'S1007', createdAt: new Date(), updatedAt: new Date() },
          { address: '505 Walnut Dr, Phoenix, AZ', graduation_date: new Date('2026-07-15'), points: 480, student_issued_id: 'S1008', createdAt: new Date(), updatedAt: new Date() },
          { address: '606 Redwood Blvd, San Francisco, CA', graduation_date: new Date('2025-10-20'), points: 550, student_issued_id: 'S1009', createdAt: new Date(), updatedAt: new Date() },
          { address: '707 Sycamore Ct, New York, NY', graduation_date: new Date('2026-12-18'), points: 620, student_issued_id: 'S1010', createdAt: new Date(), updatedAt: new Date() }
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
          { category: 'academic', reflection_required: true, reflection: 'Reflection on the topic learned.', schedule_type: 'semesterly', name: 'Advanced Programming', description: 'Study advanced programming concepts.', rationale: 'Important for computer science majors.', semester_from_grad: 3, point_value: 100, taskId: null, verificationId: 1, video_link: 'http://example.com/advanced-programming', createdAt: new Date(), updatedAt: new Date() },
          { category: 'leadership', reflection_required: false, reflection: null, schedule_type: 'one_time', name: 'Leadership Seminar', description: 'Attend a leadership seminar.', rationale: 'Develop leadership skills.', semester_from_grad: 2, point_value: 50, taskId: null, verificationId: 2, video_link: null, createdAt: new Date(), updatedAt: new Date() },
          { category: 'networking', reflection_required: true, reflection: 'Reflection on the networking event and its impact.', schedule_type: 'special_event', name: 'Networking Event', description: 'Attend a professional networking event.', rationale: 'Expand professional network.', semester_from_grad: 1, point_value: 75, taskId: null, verificationId: 3, video_link: null, createdAt: new Date(), updatedAt: new Date() },
          { category: 'strengths', reflection_required: true, reflection: 'Reflect on strengths and weaknesses from the assessment.', schedule_type: 'semesterly', name: 'Strengths Assessment', description: 'Complete a strengths assessment.', rationale: 'Understand personal strengths for career development.', semester_from_grad: 1, point_value: 60, taskId: null, verificationId: 4, video_link: 'http://example.com/strengths-assessment', createdAt: new Date(), updatedAt: new Date() },
          { category: 'career_prep', reflection_required: false, reflection: null, schedule_type: 'one_time', name: 'Resume Workshop', description: 'Attend a resume writing workshop.', rationale: 'Prepare a professional resume for job applications.', semester_from_grad: 2, point_value: 80, taskId: null, verificationId: 5, video_link: 'http://example.com/resume-workshop', createdAt: new Date(), updatedAt: new Date() },
          { category: 'mentoring', reflection_required: true, reflection: 'Reflect on the mentoring experience and lessons learned.', schedule_type: 'semesterly', name: 'Mentorship Program', description: 'Participate in a mentorship program.', rationale: 'Learn from an experienced professional in the field.', semester_from_grad: 3, point_value: 90, taskId: null, verificationId: 6, video_link: null, createdAt: new Date(), updatedAt: new Date() },
          { category: 'volunteer', reflection_required: false, reflection: null, schedule_type: 'semesterly', name: 'Community Service', description: 'Volunteer at a local charity or event.', rationale: 'Contribute to the community.', semester_from_grad: 4, point_value: 100, taskId: null, verificationId: 7, video_link: null, createdAt: new Date(), updatedAt: new Date() },
          { category: 'other', reflection_required: false, reflection: null, schedule_type: 'special_event', name: 'Hackathon Participation', description: 'Participate in a hackathon event.', rationale: 'Challenge yourself with a time-sensitive programming task.', semester_from_grad: 1, point_value: 120, taskId: null, verificationId: 8, video_link: 'http://example.com/hackathon', createdAt: new Date(), updatedAt: new Date() },
          { category: 'academic', reflection_required: true, reflection: 'Write a reflection on the course content.', schedule_type: 'semesterly', name: 'Machine Learning Course', description: 'Complete a machine learning course online.', rationale: 'Gain knowledge in a highly relevant field of study.', semester_from_grad: 2, point_value: 150, taskId: null, verificationId: 9, video_link: 'http://example.com/machine-learning', createdAt: new Date(), updatedAt: new Date() },
          { category: 'leadership', reflection_required: false, reflection: null, schedule_type: 'special_event', name: 'Leadership Conference', description: 'Attend a leadership conference in person.', rationale: 'Learn from leadership experts and network with peers.', semester_from_grad: 3, point_value: 110, taskId: 1, verificationId: 10, video_link: null, createdAt: new Date(), updatedAt: new Date() }
        ]);

        // Populate users
        await queryInterface.bulkInsert('users', [
          { fName: 'Anthony', lName: 'Pham', email: 'anthony.pham@eagles.oc.edu', phone_number: '123-456-7890', prefix: 'Mr.', studentId: 1, createdAt: new Date(), updatedAt: new Date() },
          { fName: 'Abby', lName: 'Crockett', email: 'abby.crockett@eagles.oc.edu', phone_number: '987-654-3210', prefix: 'Ms.', studentId: 2, createdAt: new Date(), updatedAt: new Date() },
          { fName: 'Bill', lName: 'Le', email: 'bill.le@eagles.oc.edu', phone_number: '555-123-4567', prefix: 'Mr.', studentId: 3, createdAt: new Date(), updatedAt: new Date() },
          { fName: 'Jenna', lName: 'Stilling', email: 'j.stilling@eagles.oc.edu', phone_number: '444-789-1234', prefix: 'Ms.', studentId: 4, createdAt: new Date(), updatedAt: new Date() },
          { fName: 'Arrian', lName: 'Taton', email: 'charlie.brown@example.com', phone_number: '222-333-4444', prefix: 'Ms.', studentId: 5, createdAt: new Date(), updatedAt: new Date() },
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
          { studentExperienceTypeId: 1, eventId: 1, userId: 1, points_earned: 10, completed_date: new Date('2025-01-15'), unapprove_reason: null, reflection_text: 'This event helped me develop teamwork and leadership skills.', status: 'approved' },
          { studentExperienceTypeId: 2, eventId: 2, userId: 2, points_earned: 8, completed_date: new Date('2025-02-01'), unapprove_reason: null, reflection_text: 'I gained valuable insights into the project management process.', status: 'ready_for_review' },
          { studentExperienceTypeId: 3, eventId: 3, userId: 3, points_earned: 15, completed_date: new Date('2025-01-30'), unapprove_reason: 'Did not meet minimum requirements.', reflection_text: 'The event was engaging, but I did not complete all the tasks.', status: 'unapproved' },
          { studentExperienceTypeId: 4, eventId: 4, userId: 4, points_earned: 20, completed_date: new Date('2025-01-25'), unapprove_reason: null, reflection_text: 'The hands-on experience was invaluable for my learning.', status: 'approved' },
          { studentExperienceTypeId: 5, eventId: 5, userId: 5, points_earned: 5, completed_date: new Date('2025-02-10'), unapprove_reason: null, reflection_text: 'It was a good experience, though I felt I could have done more.', status: 'in_progress' },
          { studentExperienceTypeId: 1, eventId: 6, userId: 6, points_earned: 12, completed_date: new Date('2025-01-18'), unapprove_reason: null, reflection_text: 'This event gave me a deeper understanding of communication skills.', status: 'approved' },
          { studentExperienceTypeId: 2, eventId: 7, userId: 7, points_earned: 9, completed_date: new Date('2025-02-05'), unapprove_reason: null, reflection_text: 'I learned a lot about data analysis and its applications.', status: 'ready_for_review' },
          { studentExperienceTypeId: 3, eventId: 8, userId: 8, points_earned: 14, completed_date: new Date('2025-01-22'), unapprove_reason: 'Failed to submit final report.', reflection_text: 'While I enjoyed the event, I did not complete all the required tasks.', status: 'unapproved' },
          { studentExperienceTypeId: 4, eventId: 9, userId: 9, points_earned: 18, completed_date: new Date('2025-02-03'), unapprove_reason: null, reflection_text: 'This experience sharpened my problem-solving and critical thinking abilities.', status: 'approved' },
          { studentExperienceTypeId: 5, eventId: 10, userId: 10, points_earned: 7, completed_date: new Date('2025-02-08'), unapprove_reason: null, reflection_text: 'I gained hands-on experience, but there was room for improvement.', status: 'in_progress' }
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
          { studentFlightPlanId: 1, taskId: 1, userId: 1, points_earned: 10, completed_date: new Date('2025-01-15'), unapprove_reason: null, status: 'approved' },
          { studentFlightPlanId: 2, taskId: 2, userId: 2, points_earned: 8, completed_date: new Date('2025-02-01'), unapprove_reason: null, status: 'ready_for_review' },
          { studentFlightPlanId: 3, taskId: 3, userId: 3, points_earned: 12, completed_date: new Date('2025-01-20'), unapprove_reason: 'Did not meet minimum criteria.', status: 'unapproved' },
          { studentFlightPlanId: 4, taskId: 4, userId: 4, points_earned: 15, completed_date: new Date('2025-01-22'), unapprove_reason: null, status: 'approved' },
          { studentFlightPlanId: 5, taskId: 5, userId: 5, points_earned: 5, completed_date: new Date('2025-02-10'), unapprove_reason: null, status: 'in_progress' },
          { studentFlightPlanId: 6, taskId: 6, userId: 6, points_earned: 10, completed_date: new Date('2025-01-18'), unapprove_reason: null, status: 'approved' },
          { studentFlightPlanId: 7, taskId: 7, userId: 7, points_earned: 9, completed_date: new Date('2025-02-05'), unapprove_reason: null, status: 'ready_for_review' },
          { studentFlightPlanId: 8, taskId: 8, userId: 8, points_earned: 11, completed_date: new Date('2025-01-25'), unapprove_reason: null, status: 'approved' },
          { studentFlightPlanId: 9, taskId: 9, userId: 9, points_earned: 14, completed_date: new Date('2025-01-30'), unapprove_reason: 'Failed to meet deadline.', status: 'unapproved' },
          { studentFlightPlanId: 10, taskId: 10, userId: 10, points_earned: 6, completed_date: new Date('2025-02-08'), unapprove_reason: null, status: 'in_progress' }
        ]);

        // Populate userRolePermissions
        await queryInterface.bulkInsert('userRolePermissions', [
          { userRoleId: 1, permissionId: 1},
          { userRoleId: 1, permissionId: 2},
          { userRoleId: 1, permissionId: 3},
          { userRoleId: 1, permissionId: 4},
          { userRoleId: 1, permissionId: 5},
          { userRoleId: 1, permissionId: 6},
          { userRoleId: 1, permissionId: 7},
          { userRoleId: 1, permissionId: 8},
          { userRoleId: 1, permissionId: 9},

          { userRoleId: 2, permissionId: 1},
          { userRoleId: 2, permissionId: 2},
          { userRoleId: 2, permissionId: 3},
          { userRoleId: 2, permissionId: 4},
          { userRoleId: 2, permissionId: 5},
          { userRoleId: 2, permissionId: 6},
          { userRoleId: 2, permissionId: 7},
          { userRoleId: 2, permissionId: 8},
          { userRoleId: 2, permissionId: 9},
          
          { userRoleId: 3, permissionId: 1},
          { userRoleId: 3, permissionId: 2},
          { userRoleId: 3, permissionId: 3},
          { userRoleId: 3, permissionId: 4},
          { userRoleId: 3, permissionId: 5},
          { userRoleId: 3, permissionId: 6},
          { userRoleId: 3, permissionId: 7},
          { userRoleId: 3, permissionId: 8},
          { userRoleId: 3, permissionId: 9},
          
          { userRoleId: 4, permissionId: 1},
          { userRoleId: 4, permissionId: 2},
          { userRoleId: 4, permissionId: 3},
          { userRoleId: 4, permissionId: 4},
          { userRoleId: 4, permissionId: 5},
          { userRoleId: 4, permissionId: 6},
          { userRoleId: 4, permissionId: 7},
          { userRoleId: 4, permissionId: 8},
          { userRoleId: 4, permissionId: 9},
          
          { userRoleId: 5, permissionId: 1},
          { userRoleId: 5, permissionId: 2},
          { userRoleId: 5, permissionId: 3},
          { userRoleId: 5, permissionId: 4},
          { userRoleId: 5, permissionId: 5},
          { userRoleId: 5, permissionId: 6},
          { userRoleId: 5, permissionId: 7},
          { userRoleId: 5, permissionId: 8},
          { userRoleId: 5, permissionId: 9},
        ]);
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

      }
      // Bridge Tables
      {

      }
      // Bridge Tables +
      {

      }
      // Bridge Tables *
      {

      }
    }

    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  }
};
