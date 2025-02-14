'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Clear Preexisting data
    // Nondependent Tables
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
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
    await queryInterface.bulkInsert('award', [
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
    await queryInterface.bulkInsert('badge', [
      { name: 'Beginner Explorer', description: 'Awarded for completing the first challenge.', type: 'automatic', points: 100, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Master Strategist', description: 'Given to players who complete all strategic levels.', type: 'manual', points: 500, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Speed Runner', description: 'For finishing a task under the time limit.', type: 'semi_automatic', points: 300, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ultimate Collector', description: 'Earned by collecting all available items.', type: 'automatic', points: 700, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Team Player', description: 'Awarded for participating in a team event.', type: 'manual', points: 400, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Problem Solver', description: 'Given to those who solve a difficult puzzle.', type: 'semi_automatic', points: 350, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Perfectionist', description: 'Earned by achieving a perfect score.', type: 'automatic', points: 600, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marathon Runner', description: 'For completing an extended challenge.', type: 'manual', points: 450, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Elite Champion', description: 'Awarded to tournament winners.', type: 'semi_automatic', points: 800, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Legendary Status', description: 'The highest badge for exceptional performance.', type: 'automatic', points: 1000, image: Buffer.from('sample image data'), createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Populate classes
    await queryInterface.bulkInsert('class', [
      { id: 1, course_number: 'CS101', course_name: 'Introduction to Computer Science', department: 'Computer Science', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, course_number: 'MATH201', course_name: 'Calculus II', department: 'Mathematics', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, course_number: 'ENG150', course_name: 'English Composition', department: 'English', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, course_number: 'HIST210', course_name: 'World History', department: 'History', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, course_number: 'PHYS101', course_name: 'Physics I', department: 'Physics', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, course_number: 'BIO110', course_name: 'Biology Basics', department: 'Biology', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, course_number: 'CHEM120', course_name: 'General Chemistry', department: 'Chemistry', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, course_number: 'ART105', course_name: 'Introduction to Art', department: 'Fine Arts', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, course_number: 'PSY200', course_name: 'Psychology Principles', department: 'Psychology', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, course_number: 'ECON101', course_name: 'Microeconomics', department: 'Economics', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Populate cliftonStrengths
    await queryInterface.bulkInsert('cliftonStrength', [
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
    await queryInterface.bulkInsert('experienceType', [
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
    await queryInterface.bulkInsert('major', [
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
      { type: 'read', createdAt: new Date(), updatedAt: new Date() },
      { type: 'write', createdAt: new Date(), updatedAt: new Date() },
      { type: 'delete', createdAt: new Date(), updatedAt: new Date() },
      { type: 'manage_store', createdAt: new Date(), updatedAt: new Date() },
      { type: 'redeem_points', createdAt: new Date(), updatedAt: new Date() },
      { type: 'create_task', createdAt: new Date(), updatedAt: new Date() },
      { type: 'delete_task', createdAt: new Date(), updatedAt: new Date() },
      { type: 'create_event', createdAt: new Date(), updatedAt: new Date() },
      { type: 'delete_event', createdAt: new Date(), updatedAt: new Date() },
      { type: 'approve_event', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Populate roles
    await queryInterface.bulkInsert('roles', [
      { role_type: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { role_type: 'student', createdAt: new Date(), updatedAt: new Date() },
      { role_type: 'reviewer', createdAt: new Date(), updatedAt: new Date() },
      { role_type: 'student_worker', createdAt: new Date(), updatedAt: new Date() },
      { role_type: 'professor', createdAt: new Date(), updatedAt: new Date() },
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

    // Populate students
    await queryInterface.bulkInsert('students', [
      { address: '123 Main St, Cityville', graduation_date: new Date('2025-05-15'), points: 1500, student_issued_id: 'S12345', createdAt: new Date(), updatedAt: new Date() },
      { address: '456 Oak Ave, Townsville', graduation_date: new Date('2024-12-20'), points: 1200, student_issued_id: 'S12346', createdAt: new Date(), updatedAt: new Date() },
      { address: '789 Pine Rd, Villagecity', graduation_date: new Date('2026-05-10'), points: 1800, student_issued_id: 'S12347', createdAt: new Date(), updatedAt: new Date() },
      { address: '321 Elm Blvd, Metropolis', graduation_date: new Date('2025-05-15'), points: 1100, student_issued_id: 'S12348', createdAt: new Date(), updatedAt: new Date() },
      { address: '654 Maple St, Hamptontown', graduation_date: new Date('2024-12-20'), points: 1400, student_issued_id: 'S12349', createdAt: new Date(), updatedAt: new Date() },
      { address: '987 Birch Ln, Springfield', graduation_date: new Date('2025-12-15'), points: 1600, student_issued_id: 'S12350', createdAt: new Date(), updatedAt: new Date() },
      { address: '135 Cedar Dr, Westbury', graduation_date: new Date('2024-12-20'), points: 1300, student_issued_id: 'S12351', createdAt: new Date(), updatedAt: new Date() },
      { address: '246 Redwood Ave, Eastside', graduation_date: new Date('2025-05-15'), points: 1250, student_issued_id: 'S12352', createdAt: new Date(), updatedAt: new Date() },
      { address: '369 Willow Way, Greenfield', graduation_date: new Date('2026-05-10'), points: 1550, student_issued_id: 'S12353', createdAt: new Date(), updatedAt: new Date() },
      { address: '741 Pinecrest Blvd, Hilltown', graduation_date: new Date('2025-12-15'), points: 1450, student_issued_id: 'S12354', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Populate task
    await queryInterface.bulkInsert('tasks', [
      { category: 'academic', type: 'automatic', reflection_required: true, reflection: 'Reflection on the topic learned.', schedule_type: 'semesterly', name: 'Advanced Programming', description: 'Study advanced programming concepts.', rationale: 'Important for computer science majors.', semester_from_grad: 3, completion_type: 'automatic', point_value: 100, prerequisite_task_id: null, video_link: 'http://example.com/advanced-programming', createdAt: new Date(), updatedAt: new Date() },
      { category: 'leadership', type: 'manual', reflection_required: false, reflection: null, schedule_type: 'one_time', name: 'Leadership Seminar', description: 'Attend a leadership seminar.', rationale: 'Develop leadership skills.', semester_from_grad: 2, completion_type: 'self_reported', point_value: 50, prerequisite_task_id: null, video_link: null, createdAt: new Date(), updatedAt: new Date() },
      { category: 'networking', type: 'semi_automatic', reflection_required: true, reflection: 'Reflection on the networking event and its impact.', schedule_type: 'special_event', name: 'Networking Event', description: 'Attend a professional networking event.', rationale: 'Expand professional network.', semester_from_grad: 1, completion_type: 'confirmed_by_oc_employee', point_value: 75, prerequisite_task_id: null, video_link: null, createdAt: new Date(), updatedAt: new Date() },
      { category: 'strengths', type: 'manual', reflection_required: true, reflection: 'Reflect on strengths and weaknesses from the assessment.', schedule_type: 'semesterly', name: 'Strengths Assessment', description: 'Complete a strengths assessment.', rationale: 'Understand personal strengths for career development.', semester_from_grad: 1, completion_type: 'self_reported', point_value: 60, prerequisite_task_id: null, video_link: 'http://example.com/strengths-assessment', createdAt: new Date(), updatedAt: new Date() },
      { category: 'career_prep', type: 'automatic', reflection_required: false, reflection: null, schedule_type: 'one_time', name: 'Resume Workshop', description: 'Attend a resume writing workshop.', rationale: 'Prepare a professional resume for job applications.', semester_from_grad: 2, completion_type: 'automatic', point_value: 80, prerequisite_task_id: null, video_link: 'http://example.com/resume-workshop', createdAt: new Date(), updatedAt: new Date() },
      { category: 'mentoring', type: 'manual', reflection_required: true, reflection: 'Reflect on the mentoring experience and lessons learned.', schedule_type: 'semesterly', name: 'Mentorship Program', description: 'Participate in a mentorship program.', rationale: 'Learn from an experienced professional in the field.', semester_from_grad: 3, completion_type: 'self_reported', point_value: 90, prerequisite_task_id: null, video_link: null, createdAt: new Date(), updatedAt: new Date() },
      { category: 'volunteer', type: 'semi_automatic', reflection_required: false, reflection: null, schedule_type: 'semesterly', name: 'Community Service', description: 'Volunteer at a local charity or event.', rationale: 'Contribute to the community.', semester_from_grad: 4, completion_type: 'confirmed_by_oc_employee', point_value: 100, prerequisite_task_id: null, video_link: null, createdAt: new Date(), updatedAt: new Date() },
      { category: 'other', type: 'manual', reflection_required: false, reflection: null, schedule_type: 'special_event', name: 'Hackathon Participation', description: 'Participate in a hackathon event.', rationale: 'Challenge yourself with a time-sensitive programming task.', semester_from_grad: 1, completion_type: 'self_reported', point_value: 120, prerequisite_task_id: null, video_link: 'http://example.com/hackathon', createdAt: new Date(), updatedAt: new Date() },
      { category: 'academic', type: 'automatic', reflection_required: true, reflection: 'Write a reflection on the course content.', schedule_type: 'semesterly', name: 'Machine Learning Course', description: 'Complete a machine learning course online.', rationale: 'Gain knowledge in a highly relevant field of study.', semester_from_grad: 2, completion_type: 'automatic', point_value: 150, prerequisite_task_id: null, video_link: 'http://example.com/machine-learning', createdAt: new Date(), updatedAt: new Date() },
      { category: 'leadership', type: 'semi_automatic', reflection_required: false, reflection: null, schedule_type: 'special_event', name: 'Leadership Conference', description: 'Attend a leadership conference in person.', rationale: 'Learn from leadership experts and network with peers.', semester_from_grad: 3, completion_type: 'confirmed_by_oc_employee', point_value: 110, prerequisite_task_id: null, video_link: null, createdAt: new Date(), updatedAt: new Date() }
    ]);
    
    // Populate users
    await queryInterface.bulkInsert('user', [
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
