"use strict";

const { content_v2_1 } = require("googleapis");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    // Clear Preexisting data
    {
      // Eagle Flight Plan
      {
        // Nondependent Tables
        {
          await queryInterface.bulkDelete("awards", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("badges", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("cliftonStrengths", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("experienceTypes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("majors", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("permissions", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("roles", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("students", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("semesters", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("verifications", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }

        // Bridge Tables
        {
          await queryInterface.bulkDelete("badgeExperienceTypes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("classes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("documents", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("events", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("experienceTypeMajors", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete('experienceTypeCliftonStrengths', null, { 
            truncate: true, 
            cascade: true, 
            restartIdentity: true 
          });
          await queryInterface.bulkDelete("flightPlans", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("rolePermissions", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentBadges", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentCliftonStrengths", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentExperienceTypes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentMajors", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("tasks", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("users", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }

        // Bridge Tables +
        {
          await queryInterface.bulkDelete("experienceTypeEvents", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("eventCliftonStrengths", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("flightPlanExperienceTypes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("flightPlanTasks", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("professorClasses", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentClasses", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentExperienceTypeEvents", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentFlightPlans", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("taskBadges", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("taskCliftonStrengths", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("taskMajors", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("transactions", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("userRoles", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }

        // Bridge Tables *
        {
          await queryInterface.bulkDelete('studentFlightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('userRolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
          await queryInterface.bulkDelete('studentEvents', null, {truncate: true, cascade: true, restartIdentity: true });
        }
      }
      // Resume Builder
      {
        // Nondependent Tables
        {
          await queryInterface.bulkDelete("adminRoles", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("reviewerRoles", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("roles", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("students", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }
        // Bridge Tables that have one FK
        {
          await queryInterface.bulkDelete("certifications", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("education", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("experiences", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("interests", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("links", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("projects", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeReviews", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("skills", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }
        // Bridge Tables + that have two FKs
        {
          await queryInterface.bulkDelete("courses", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumes", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeCertifications", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeEducations", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeExperiences", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeInterests", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeLinks", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeProjects", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("resumeSkills", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("userResumeReviews", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }
        // Bridge Tables * that have three FKs
        {
          await queryInterface.bulkDelete("resumeCourses", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
        }
      }
    }
    // Populate Tables
    {
      {
        // Temp seeder data for resume builder
        // Populate reviewerRoles
        await queryInterface.bulkInsert("reviewerRoles", [
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
        ]);

        // Populate adminRoles
        await queryInterface.bulkInsert("adminRoles", [
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
          { createdAt: new Date(), updatedAt: new Date() },
        ]);
      }
      // Eagle Flight Plan
      {
        // Nondependent Tables
        {
          // Populate awards
          await queryInterface.bulkInsert("awards", [
            {
              name: "Professional Attire Package",
              description: "Includes a blazer, pants, and tie.",
              cost: 500,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png", // Default value added
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Professional Headshot",
              description: "Receive a professional headshot session.",
              cost: 300,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "OC Water Bottle",
              description: "High-quality OC water bottle.",
              cost: 150,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Dawson Hollow Concert Ticket",
              description: "Includes tickets to the Dawson Hollow concert.",
              cost: 200,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Business Attire Complete Set",
              description:
                "Includes blazer, pants, tie, and a professional headshot.",
              cost: 800,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Stylish Blazer",
              description: "Receive a stylish and professional blazer.",
              cost: 400,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Formal Pants",
              description:
                "Classic formal pants suitable for business settings.",
              cost: 300,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Formal Tie",
              description: "Elegant tie to complement your business attire.",
              cost: 100,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Formal Pencil Skirt",
              description: "Classy skirt for warm days.",
              cost: 250,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Complete Professional Package",
              description:
                "All items including attire, headshot, and concert ticket.",
              cost: 1200,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: Buffer.from("sample image data"),
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate badges
          await queryInterface.bulkInsert("badges", [
            {
              name: "Beginner Explorer",
              description: "Awarded for completing the first challenge.",
              type: "task_completion",
              points: 100,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Master Strategist",
              description:
                "Given to players who complete all strategic levels.",
              type: "experience_completion",
              points: 500,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Speed Runner",
              description: "For finishing a task under the time limit.",
              type: "flightplan_completion",
              points: 300,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Ultimate Collector",
              description: "Earned by collecting all available items.",
              type: "task_completion",
              points: 700,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Team Player",
              description: "Awarded for participating in a team event.",
              type: "experience_completion",
              points: 400,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Problem Solver",
              description: "Given to those who solve a difficult puzzle.",
              type: "flightplan_completion",
              points: 350,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Perfectionist",
              description: "Earned by achieving a perfect score.",
              type: "task_completion",
              points: 600,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Marathon Runner",
              description: "For completing an extended challenge.",
              type: "experience_completion",
              points: 450,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Elite Champion",
              description: "Awarded to tournament winners.",
              type: "flightplan_completion",
              points: 800,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Legendary Status",
              description: "The highest badge for exceptional performance.",
              type: "task_completion",
              points: 1000,
              image: null,
              image_type: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate cliftonStrengths
          await queryInterface.bulkInsert("cliftonStrengths", [
            {
              name: "Achiever",
              description:
                "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Activator",
              description:
                "People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Adaptability",
              description:
                'People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be "now" people who take things as they come and discover the future one day at a time.',
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Analytical",
              description:
                "People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Arranger",
              description:
                "People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Belief",
              description:
                "People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Command",
              description:
                "People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Communication",
              description:
                "People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Competition",
              description:
                "People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Connectedness",
              description:
                "People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Consistency",
              description:
                "People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They crave stable routines and clear rules and procedures that everyone can follow.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Context",
              description:
                "People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Deliberative",
              description:
                "People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Developer",
              description:
                "People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Discipline",
              description:
                "People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Empathy",
              description:
                "People exceptionally talented in the Empathy theme can sense other people’s feelings by imagining themselves in others’ lives or situations.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Focus",
              description:
                "People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. They prioritize, then act.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Futuristic",
              description:
                "People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Harmony",
              description:
                "People exceptionally talented in the Harmony theme look for consensus. They don’t enjoy conflict; rather, they seek areas of agreement.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Ideation",
              description:
                "People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Includer",
              description:
                "People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Individualization",
              description:
                "People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Input",
              description:
                "People exceptionally talented in the Input theme have a need to collect and archive. They may accumulate information, ideas, artifacts or even relationships.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Intellection",
              description:
                "People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Learner",
              description:
                "People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Maximizer",
              description:
                "People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Positivity",
              description:
                "People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Relator",
              description:
                "People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.",
              category: "relationship_building",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Responsibility",
              description:
                "People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Restorative",
              description:
                "People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.",
              category: "executing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Self-Assurance",
              description:
                "People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Significance",
              description:
                "People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Strategic",
              description:
                "People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.",
              category: "strategic_thinking",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Woo",
              description:
                "People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone.",
              category: "influencing",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { 
              name: 'All', 
              description: 
                'All of the Clifton Strengths in the System', 
              category: 'N/A', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }
          ]);

          // Populate experienceType
          await queryInterface.bulkInsert("experienceTypes", [
            {
              category: "academic",
              type: "automatic",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Research Project",
              description: "Participate in a faculty-led research project.",
              rational: "Enhances critical thinking and research skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              type: "manual",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Student Government",
              description: "Serve in a leadership role in student government.",
              rational: "Develops leadership and organizational skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              type: "automatic",
              req_reflection: false,
              schedule_type: "special_event",
              name: "Networking Event",
              description: "Attend a professional networking event.",
              rational: "Expands professional connections.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
              type: "manual",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Strengths Assessment",
              description: "Complete a strengths-based assessment.",
              rational: "Helps identify personal strengths and growth areas.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "career_prep",
              type: "automatic",
              req_reflection: false,
              schedule_type: "one_time",
              name: "Resume Workshop",
              description: "Participate in a resume-building workshop.",
              rational: "Improves job application materials.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "mentoring",
              type: "manual",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Peer Mentoring",
              description: "Serve as a mentor for a fellow student.",
              rational: "Fosters leadership and interpersonal skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              type: "automatic",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Community Service",
              description: "Engage in a one-time community service project.",
              rational: "Encourages civic responsibility.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              type: "manual",
              req_reflection: false,
              schedule_type: "every_semester",
              name: "Honors Program",
              description: "Participate in an academic honors program.",
              rational: "Enhances academic achievement.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              type: "automatic",
              req_reflection: true,
              schedule_type: "special_event",
              name: "Leadership Summit",
              description: "Attend a leadership development summit.",
              rational: "Develops advanced leadership skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              type: "manual",
              req_reflection: false,
              schedule_type: "one_time",
              name: "Alumni Mixer",
              description: "Connect with alumni from your program.",
              rational: "Builds professional relationships.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { 
              category: 'academic', 
              type: 'automatic', 
              req_reflection: true, 
              schedule_type: 'one_time', 
              name: 'Experience 11', 
              description: 'Participate in a faculty-led research project.', 
              rational: 'Enhances critical thinking and research skills.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'leadership', 
              type: 'manual', 
              req_reflection: true, 
              schedule_type: 'every_semester', 
              name: 'Experience 12', 
              description: 'Serve in a leadership role in student government.', 
              rational: 'Develops leadership and organizational skills.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'networking', 
              type: 'automatic', 
              req_reflection: false, 
              schedule_type: 'special_event', 
              name: 'Experience 13', 
              description: 'Attend a professional networking event.', 
              rational: 'Expands professional connections.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'strengths', 
              type: 'manual', 
              req_reflection: true, 
              schedule_type: 'one_time', 
              name: 'Experience 14', 
              description: 'Complete a strengths-based assessment.', 
              rational: 'Helps identify personal strengths and growth areas.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'career_prep', 
              type: 'automatic', 
              req_reflection: false, 
              schedule_type: 'one_time', name: 'Experience 15', 
              description: 'Participate in a resume-building workshop.', 
              rational: 'Improves job application materials.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'mentoring', 
              type: 'manual', 
              req_reflection: true, 
              schedule_type: 'every_semester', 
              name: 'Experience 16', 
              description: 'Serve as a mentor for a fellow student.', 
              rational: 'Fosters leadership and interpersonal skills.', 
              createdAt: new Date(), 
              updatedAt: new Date() },
            { 
              category: 'volunteer', 
              type: 'automatic', 
              req_reflection: true, 
              schedule_type: 'one_time', 
              name: 'Experience 17', 
              description: 'Engage in a one-time community service project.', 
              rational: 'Encourages civic responsibility.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'academic', 
              type: 'manual', 
              req_reflection: false, 
              schedule_type: 'every_semester', 
              name: 'Experience 18', 
              description: 'Participate in an academic honors program.', 
              rational: 'Enhances academic achievement.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'leadership', 
              type: 'automatic',
              req_reflection: true, 
              schedule_type: 'special_event', 
              name: 'Experience 19', 
              description: 'Attend a leadership development summit.', 
              rational: 'Develops advanced leadership skills.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'networking', 
              type: 'manual', 
              req_reflection: false, 
              schedule_type: 'one_time', 
              name: 'Experience 20', 
              description: 'Connect with alumni from your program.', 
              rational: 'Builds professional relationships.', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }
          ]);

          // Populate majors
          await queryInterface.bulkInsert("majors", [
            {
              name: "Computer Science",
              description:
                "Study of computers, algorithms, and software development.",
              department: "Engineering",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mechanical Engineering",
              description: "Study of mechanical systems and design principles.",
              department: "Engineering",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Electrical Engineering",
              description: "Study of electrical systems, circuits, and energy.",
              department: "Engineering",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Business Administration",
              description:
                "Study of business management, operations, and economics.",
              department: "Business",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Psychology",
              description: "Study of human behavior and mental processes.",
              department: "Humanities",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Biology",
              description:
                "Study of living organisms and biological processes.",
              department: "Science",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mathematics",
              description:
                "Study of mathematical theories, structures, and applications.",
              department: "Science",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Chemistry",
              description:
                "Study of chemical reactions, substances, and molecular structures.",
              department: "Science",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "English Literature",
              description: "Study of English language and literary works.",
              department: "Humanities",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Political Science",
              description:
                "Study of government systems, politics, and international relations.",
              department: "Humanities",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { 
              name: 'All', 
              description: 'All Majors in the System', 
              department: 'N/A', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }
          ]);

          // Populate permissions
          await queryInterface.bulkInsert("permissions", [
            {
              type: "user_maintenance",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "flightplan_maintenance",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "flightplan_approval",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "shop_maintenance",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "shop_approval",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "resume_reviewer",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "admin_view",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "student_view",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "professor_view",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate roles
          await queryInterface.bulkInsert("roles", [
            {
              role_type: "admin",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              role_type: "student",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              role_type: "reviewer",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              role_type: "student_worker",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              role_type: "professor",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate semesters
          await queryInterface.bulkInsert("semesters", [
            {
              name: "Fall 2023",
              start_date: new Date("2023-09-01"),
              end_date: new Date("2023-12-15"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Spring 2024",
              start_date: new Date("2024-01-15"),
              end_date: new Date("2024-05-10"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Fall 2024",
              start_date: new Date("2024-09-01"),
              end_date: new Date("2024-12-15"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Spring 2025",
              start_date: new Date("2025-01-15"),
              end_date: new Date("2025-05-10"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Fall 2025",
              start_date: new Date("2025-09-01"),
              end_date: new Date("2025-12-15"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Spring 2026",
              start_date: new Date("2026-01-15"),
              end_date: new Date("2026-05-10"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Fall 2026",
              start_date: new Date("2026-09-01"),
              end_date: new Date("2026-12-15"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Spring 2027",
              start_date: new Date("2027-01-15"),
              end_date: new Date("2027-05-10"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Fall 2027",
              start_date: new Date("2027-09-01"),
              end_date: new Date("2027-12-15"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Spring 2028",
              start_date: new Date("2028-01-15"),
              end_date: new Date("2028-05-10"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate verifications
          await queryInterface.bulkInsert("verifications", [
            {
              type: "automatic",
              google_form_url: "http://example.com/verification-form1",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "semi_automatic",
              google_form_url: "http://example.com/verification-form2",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "manual",
              google_form_url: "http://example.com/verification-form3",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "automatic",
              google_form_url: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "semi_automatic",
              google_form_url: "http://example.com/verification-form4",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "manual",
              google_form_url: "http://example.com/verification-form5",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "automatic",
              google_form_url: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "manual",
              google_form_url: "http://example.com/verification-form6",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "semi_automatic",
              google_form_url: "http://example.com/verification-form7",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "automatic",
              google_form_url: "http://example.com/verification-form8",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }

        // Bridge Tables
        {
          // Populate badgeExperienceType
          await queryInterface.bulkInsert("badgeExperienceTypes", [
            {
              badgeId: 1,
              experienceTypeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 2,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 3,
              experienceTypeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 4,
              experienceTypeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 5,
              experienceTypeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 6,
              experienceTypeId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 7,
              experienceTypeId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 8,
              experienceTypeId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 9,
              experienceTypeId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              badgeId: 10,
              experienceTypeId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate classes
          await queryInterface.bulkInsert("classes", [
            {
              course_number: "CS101",
              course_name: "Introduction to Computer Science",
              department: "Computer Science",
              semesterId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "MATH201",
              course_name: "Calculus II",
              department: "Mathematics",
              semesterId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "ENG150",
              course_name: "English Composition",
              department: "English",
              semesterId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "HIST210",
              course_name: "World History",
              department: "History",
              semesterId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "PHYS101",
              course_name: "Physics I",
              department: "Physics",
              semesterId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "BIO110",
              course_name: "Biology Basics",
              department: "Biology",
              semesterId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "CHEM120",
              course_name: "General Chemistry",
              department: "Chemistry",
              semesterId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "ART105",
              course_name: "Introduction to Art",
              department: "Fine Arts",
              semesterId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "PSY200",
              course_name: "Psychology Principles",
              department: "Psychology",
              semesterId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              course_number: "ECON101",
              course_name: "Microeconomics",
              department: "Economics",
              semesterId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate documents
          await queryInterface.bulkInsert("documents", [
            {
              name: "Resume",
              completion_date: new Date("2024-01-15"),
              semester_approved: "spring",
              image: null,
              studentId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Cover Letter",
              completion_date: new Date("2024-02-10"),
              semester_approved: "spring",
              image: null,
              studentId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Internship Agreement",
              completion_date: new Date("2023-12-05"),
              semester_approved: "fall",
              image: null,
              studentId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Project Report",
              completion_date: new Date("2024-03-20"),
              semester_approved: "spring",
              image: null,
              studentId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Research Paper",
              completion_date: new Date("2023-11-30"),
              semester_approved: "fall",
              image: null,
              studentId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Portfolio",
              completion_date: new Date("2024-01-25"),
              semester_approved: "spring",
              image: null,
              studentId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Reference Letter",
              completion_date: new Date("2024-02-15"),
              semester_approved: "spring",
              image: null,
              studentId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Certification",
              completion_date: new Date("2023-10-20"),
              semester_approved: "fall",
              image: null,
              studentId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Training Completion",
              completion_date: new Date("2024-04-05"),
              semester_approved: "spring",
              image: null,
              studentId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Workshop Notes",
              completion_date: new Date("2023-09-15"),
              semester_approved: "fall",
              image: null,
              studentId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate events
          await queryInterface.bulkInsert("events", [
            {
              name: "Public Speaking Workshop",
              description: "Enhance your presentation skills",
              event_type: "career_services",
              date: new Date("2025-04-02"),
              start_date_time: new Date("2025-04-02T09:00:00"),
              end_date_time: new Date("2025-04-02T11:00:00"),
              location: "Room 150",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Art Therapy Session",
              description: "De-stress through creative expression",
              event_type: "extra_curricular",
              date: new Date("2025-04-03"),
              start_date_time: new Date("2025-04-03T10:00:00"),
              end_date_time: new Date("2025-04-03T11:30:00"),
              location: "Wellness Center",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 8,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Business Networking Social",
              description: "Meet professionals in finance & marketing",
              event_type: "mentoring",
              date: new Date("2025-04-04"),
              start_date_time: new Date("2025-04-04T13:00:00"),
              end_date_time: new Date("2025-04-04T15:00:00"),
              location: "Downtown Café",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 12,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Environmental Sustainability Panel",
              description: "Discuss climate change solutions",
              event_type: "career_services",
              date: new Date("2025-04-05"),
              start_date_time: new Date("2025-04-05T08:00:00"),
              end_date_time: new Date("2025-04-05T11:00:00"),
              location: "Lecture Hall A",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Music Appreciation Night",
              description: "Explore different music genres",
              event_type: "extra_curricular",
              date: new Date("2025-04-06"),
              start_date_time: new Date("2025-04-06T14:00:00"),
              end_date_time: new Date("2025-04-06T16:30:00"),
              location: "Campus Auditorium",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("events", [
            {
              name: "Cybersecurity Panel",
              description: "Discuss latest cybersecurity trends",
              event_type: "career_services",
              date: new Date("2025-04-02"),
              start_date_time: new Date("2025-04-02T08:00:00"),
              end_date_time: new Date("2025-04-02T10:00:00"),
              location: "Auditorium",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 12,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Cloud Computing Workshop",
              description: "Learn about AWS, Azure, and GCP",
              event_type: "career_services",
              date: new Date("2025-04-03"),
              start_date_time: new Date("2025-04-03T11:00:00"),
              end_date_time: new Date("2025-04-03T14:00:00"),
              location: "Room 204",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Game Development Jam",
              description: "Create a game in 24 hours",
              event_type: "extra_curricular",
              date: new Date("2025-04-04"),
              start_date_time: new Date("2025-04-04T12:00:00"),
              end_date_time: new Date("2025-04-05T12:00:00"),
              location: "Lab 303",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 25,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Soft Skills Training",
              description: "Enhance communication & teamwork",
              event_type: "career_services",
              date: new Date("2025-04-05"),
              start_date_time: new Date("2025-04-05T09:00:00"),
              end_date_time: new Date("2025-04-05T12:00:00"),
              location: "Career Center",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Hackathon Bootcamp",
              description: "Prep for an upcoming hackathon",
              event_type: "extra_curricular",
              date: new Date("2025-04-06"),
              start_date_time: new Date("2025-04-06T10:00:00"),
              end_date_time: new Date("2025-04-06T15:00:00"),
              location: "Innovation Lab",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 18,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate experienceTypeMajor
          await queryInterface.bulkInsert("experienceTypeMajors", [
            {
              experienceTypeId: 1,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 2,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 3,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 4,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 5,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 6,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 7,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 8,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 9,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 10,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 11,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 12,
              majorId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 13,
              majorId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 14,
              majorId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 15,
              majorId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 16,
              majorId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 17,
              majorId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 18,
              majorId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 19,
              majorId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 20,
              majorId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
            
          // Populate experienceTypeCliftonStrength
          await queryInterface.bulkInsert('experienceTypeCliftonStrengths', [
            { 
              experienceTypeId: 1, 
              cliftonStrengthId: 1, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 2,
              cliftonStrengthId: 2, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 3, 
              cliftonStrengthId: 3, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 4, 
              cliftonStrengthId: 4, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 5, 
              cliftonStrengthId: 5, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 6, 
              cliftonStrengthId: 6, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 7, 
              cliftonStrengthId: 7, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 8, 
              cliftonStrengthId: 8, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 9, 
              cliftonStrengthId: 9, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 10, 
              cliftonStrengthId: 10, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 11, 
              cliftonStrengthId: 11, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 12, 
              cliftonStrengthId: 12, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 13, 
              cliftonStrengthId: 13, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            {
              experienceTypeId: 14, 
              cliftonStrengthId: 14, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 15, 
              cliftonStrengthId: 15, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 16, 
              cliftonStrengthId: 16, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              experienceTypeId: 17, 
              cliftonStrengthId: 17, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { // Testing 'All' Clifton Strength
              experienceTypeId: 18, 
              cliftonStrengthId: 35, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }, 
            { // Testing 'All' Clifton Strength
              experienceTypeId: 19, 
              cliftonStrengthId: 35, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }, 
            { // Testing 'All' Clifton Strength
              experienceTypeId: 20, 
              cliftonStrengthId: 35, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }  
          ]);

          // Populate flightPlans
          await queryInterface.bulkInsert("flightPlans", [
            { semesterId: 1, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 2, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 3, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 4, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 5, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 6, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 7, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 8, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 9, createdAt: new Date(), updatedAt: new Date() },
            { semesterId: 10, createdAt: new Date(), updatedAt: new Date() },
          ]);

          // Populate rolePermission
          await queryInterface.bulkInsert("rolePermissions", [
            {
              roleId: 1,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 1,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 2,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 3,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 4,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 5,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 5,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 5,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              roleId: 5,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentBadges
          await queryInterface.bulkInsert("studentBadges", [
            {
              date_acquired: new Date("2024-01-15"),
              studentId: 1,
              badgeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-02-10"),
              studentId: 2,
              badgeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-12-05"),
              studentId: 3,
              badgeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-03-20"),
              studentId: 4,
              badgeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-11-30"),
              studentId: 5,
              badgeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-01-25"),
              studentId: 6,
              badgeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-02-15"),
              studentId: 7,
              badgeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-10-20"),
              studentId: 8,
              badgeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-04-05"),
              studentId: 9,
              badgeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-09-15"),
              studentId: 10,
              badgeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentCliftonStrength
          await queryInterface.bulkInsert("studentCliftonStrengths", [
            {
              studentId: 1,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              cliftonStrengthId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentExperienceType
          await queryInterface.bulkInsert("studentExperienceTypes", [
            {
              studentId: 1,
              experienceTypeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              experienceTypeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              experienceTypeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              experienceTypeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              experienceTypeId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              experienceTypeId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              experienceTypeId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              experienceTypeId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              experienceTypeId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentMajor
          await queryInterface.bulkInsert("studentMajors", [
            {
              studentId: 1,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate task
          await queryInterface.bulkInsert("tasks", [
            {
              category: "academic",
              reflection_required: true,
              schedule_type: "semesterly",
              name: "Advanced Programming",
              description: "Study advanced programming concepts.",
              rationale: "Important for computer science majors.",
              semester_from_grad: 3,
              point_value: 100,
              taskId: null,
              verificationId: 1,
              video_link: "http://example.com/advanced-programming",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              reflection_required: false,
              schedule_type: "one_time",
              name: "Leadership Seminar",
              description: "Attend a leadership seminar.",
              rationale: "Develop leadership skills.",
              semester_from_grad: 2,
              point_value: 50,
              taskId: null,
              verificationId: 2,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              reflection_required: true,
              schedule_type: "special_event",
              name: "Networking Event",
              description: "Attend a professional networking event.",
              rationale: "Expand professional network.",
              semester_from_grad: 1,
              point_value: 75,
              taskId: null,
              verificationId: 3,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
              reflection_required: true,
              schedule_type: "semesterly",
              name: "Strengths Assessment",
              description: "Complete a strengths assessment.",
              rationale:
                "Understand personal strengths for career development.",
              semester_from_grad: 1,
              point_value: 60,
              taskId: null,
              verificationId: 4,
              video_link: "http://example.com/strengths-assessment",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "career_prep",
              reflection_required: false,
              schedule_type: "one_time",
              name: "Resume Workshop",
              description: "Attend a resume writing workshop.",
              rationale: "Prepare a professional resume for job applications.",
              semester_from_grad: 2,
              point_value: 80,
              taskId: null,
              verificationId: 5,
              video_link: "https://youtu.be/rMzXigTdZrQ?si=_XIzDZn23PLSHP2l",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "mentoring",
              reflection_required: true,
              schedule_type: "semesterly",
              name: "Mentorship Program",
              description: "Participate in a mentorship program.",
              rationale: "Learn from an experienced professional in the field.",
              semester_from_grad: 3,
              point_value: 90,
              taskId: null,
              verificationId: 6,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              reflection_required: false,
              schedule_type: "semesterly",
              name: "Community Service",
              description: "Volunteer at a local charity or event.",
              rationale: "Contribute to the community.",
              semester_from_grad: 4,
              point_value: 100,
              taskId: null,
              verificationId: 7,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "other",
              reflection_required: false,
              schedule_type: "special_event",
              name: "Hackathon Participation",
              description: "Participate in a hackathon event.",
              rationale:
                "Challenge yourself with a time-sensitive programming task.",
              semester_from_grad: 1,
              point_value: 120,
              taskId: null,
              verificationId: 8,
              video_link: "http://example.com/hackathon",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              reflection_required: true,
              schedule_type: "semesterly",
              name: "Machine Learning Course",
              description: "Complete a machine learning course online.",
              rationale: "Gain knowledge in a highly relevant field of study.",
              semester_from_grad: 2,
              point_value: 150,
              taskId: null,
              verificationId: 9,
              video_link: "http://example.com/machine-learning",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              reflection_required: false,
              schedule_type: "special_event",
              name: "Leadership Conference",
              description: "Attend a leadership conference in person.",
              rationale:
                "Learn from leadership experts and network with peers.",
              semester_from_grad: 3,
              point_value: 110,
              taskId: 1,
              verificationId: 10,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { 
              category: 'leadership', 
              reflection_required: false, 
              schedule_type: 'special_event', 
              name: 'Task 11', 
              description: 'Attend a leadership conference in person.', 
              rationale: 'Learn from leadership experts and network with peers.', 
              semester_from_grad: 3, 
              point_value: 110, 
              taskId: 1, 
              verificationId: 10, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }, 
            { 
              category: 'academic', 
              reflection_required: true, 
              schedule_type: 'semesterly', 
              name: 'Task 12', 
              description: 'Study advanced programming concepts.', 
              rationale: 'Important for computer science majors.', 
              semester_from_grad: 3, 
              point_value: 100, 
              taskId: null, 
              verificationId: 1, 
              video_link: 'http://example.com/advanced-programming', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'leadership', 
              reflection_required: false, 
              schedule_type: 'one_time', 
              name: 'Task 13', 
              description: 'Attend a leadership seminar.', 
              rationale: 'Develop leadership skills.', 
              semester_from_grad: 2, 
              point_value: 50, 
              taskId: null, 
              verificationId: 2, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'networking', 
              reflection_required: true, 
              schedule_type: 'special_event', 
              name: 'Task 14', 
              description: 'Attend a professional networking event.', 
              rationale: 'Expand professional network.', 
              semester_from_grad: 1, 
              point_value: 75, 
              taskId: null, 
              verificationId: 3, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'strengths', 
              reflection_required: true, 
              schedule_type: 'semesterly', 
              name: 'Task 15', 
              description: 'Complete a strengths assessment.', 
              rationale: 'Understand personal strengths for career development.', 
              semester_from_grad: 1,
              point_value: 60,
              taskId: null, 
              verificationId: 4, 
              video_link: 'http://example.com/strengths-assessment', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'career_prep', 
              reflection_required: false, 
              schedule_type: 'one_time', 
              name: 'Task 16', 
              description: 'Attend a resume writing workshop.', 
              rationale: 'Prepare a professional resume for job applications.', 
              semester_from_grad: 2, 
              point_value: 80, 
              taskId: null, 
              verificationId: 5, 
              video_link: 'https://youtu.be/rMzXigTdZrQ?si=_XIzDZn23PLSHP2l', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'mentoring', 
              reflection_required: true, 
              schedule_type: 'semesterly', 
              name: 'Task 17', 
              description: 'Participate in a mentorship program.', 
              rationale: 'Learn from an experienced professional in the field.', 
              semester_from_grad: 3, 
              point_value: 90, 
              taskId: null, 
              verificationId: 6, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'volunteer', 
              reflection_required: false, 
              schedule_type: 'semesterly', 
              name: 'Task 18', 
              description: 'Volunteer at a local charity or event.', 
              rationale: 'Contribute to the community.', 
              semester_from_grad: 4, 
              point_value: 100, 
              taskId: null, 
              verificationId: 7, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'other', 
              reflection_required: false, 
              schedule_type: 'special_event', 
              name: 'Task 19', 
              description: 'Participate in a hackathon event.', 
              rationale: 'Challenge yourself with a time-sensitive programming task.', 
              semester_from_grad: 1, 
              point_value: 120, 
              taskId: null, 
              verificationId: 8, 
              video_link: 'http://example.com/hackathon', 
              createdAt: new Date(), 
              updatedAt: new Date() 
            },
            { 
              category: 'academic', 
              reflection_required: true, 
              schedule_type: 'semesterly', 
              name: 'Task 20', 
              description: 'Complete a machine learning course online.', 
              rationale: 'Gain knowledge in a highly relevant field of study.', 
              semester_from_grad: 2, 
              point_value: 150, 
              taskId: null, 
              verificationId: 9, 
              video_link: 'http://example.com/machine-learning', 
              createdAt: new Date(), 
              updatedAt: new Date()
            },
            { 
              category: 'leadership', 
              reflection_required: false, 
              schedule_type: 'special_event', 
              name: 'Leadership Conference', 
              description: 'Attend a leadership conference in person.', 
              rationale: 'Learn from leadership experts and network with peers.', 
              semester_from_grad: 3, 
              point_value: 110, 
              taskId: 1, 
              verificationId: 10, 
              video_link: null, 
              createdAt: new Date(), 
              updatedAt: new Date() 
            }
          ]);

          // Populate users
          await queryInterface.bulkInsert("users", [
            {
              fName: "Anthony",
              lName: "Pham",
              email: "anthony.pham@eagles.oc.edu",
              phone_number: "123-456-7890",
              prefix: "Mr.",
              studentId: 1,
              reviewerId: 1,
              adminId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Abby",
              lName: "Crockett",
              email: "abby.crockett@eagles.oc.edu",
              phone_number: "987-654-3210",
              prefix: "Ms.",
              studentId: 2,
              reviewerId: 2,
              adminId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Bill",
              lName: "Le",
              email: "bill.le@eagles.oc.edu",
              phone_number: "555-123-4567",
              prefix: "Mr.",
              studentId: 3,
              reviewerId: 3,
              adminId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Jenna",
              lName: "Stilling",
              email: "j.stilling@eagles.oc.edu",
              phone_number: "444-789-1234",
              prefix: "Ms.",
              studentId: 4,
              reviewerId: 4,
              adminId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Arrian",
              lName: "Taton",
              email: "arrian.taton@eagles.oc.edu",
              phone_number: "222-333-4444",
              prefix: "Ms.",
              studentId: 5,
              reviewerId: 5,
              adminId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Paul",
              lName: "Nason",
              email: "paul.nason@eagles.oc.edu",
              phone_number: "111-222-3333",
              prefix: "Dr.",
              image: "data:image/png;base64,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",
              imageType: "image/png",
              studentId: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Eve",
              lName: "Martin",
              email: "eve.martin@example.com",
              phone_number: "666-555-4444",
              prefix: "Dr.",
              studentId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Frank",
              lName: "Garcia",
              email: "frank.garcia@example.com",
              phone_number: "777-888-9999",
              prefix: "Mr.",
              studentId: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Grace",
              lName: "Rodriguez",
              email: "grace.rodriguez@example.com",
              phone_number: "999-888-7777",
              prefix: "Ms.",
              studentId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Hannah",
              lName: "Martinez",
              email: "hannah.martinez@example.com",
              phone_number: "333-222-1111",
              prefix: "Mrs.",
              studentId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // New users
            {
              fName: "Adam",
              lName: "Nguyen",
              email: "adam.nguyen@example.com",
              phone_number: "123-345-4312",
              prefix: "Mr.",
              studentId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              fName: "Jacob",
              lName: "Doe",
              email: "jacob.doe@example.com",
              phone_number: "645-854-8765",
              prefix: "Mr.",
              studentId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }

        // Bridge Tables +
        {
          // Populate experienceTypeEvent
          await queryInterface.bulkInsert("experienceTypeEvents", [
            {
              experienceTypeId: 1,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 2,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 3,
              eventId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 4,
              eventId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 5,
              eventId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 6,
              eventId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 7,
              eventId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 8,
              eventId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 9,
              eventId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 10,
              eventId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate eventCliftonStrength
          await queryInterface.bulkInsert("eventCliftonStrengths", [
            {
              eventId: 1,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 4,
              cliftonStrengthId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              cliftonStrengthId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate flightPlanExperienceType
          await queryInterface.bulkInsert("flightPlanExperienceTypes", [
            {
              flightPlanId: 1,
              experienceTypeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              experienceTypeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              experienceTypeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 5,
              experienceTypeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 6,
              experienceTypeId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 7,
              experienceTypeId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 8,
              experienceTypeId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 9,
              experienceTypeId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 10,
              experienceTypeId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate flightPlanTask
          await queryInterface.bulkInsert("flightPlanTasks", [
            {
              flightPlanId: 1,
              taskId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 5,
              taskId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 6,
              taskId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 7,
              taskId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 8,
              taskId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 9,
              taskId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 10,
              taskId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 1,
              taskId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 2,
              taskId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 3,
              taskId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              flightPlanId: 4,
              taskId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate professorClass
          await queryInterface.bulkInsert("professorClasses", [
            {
              userId: 1,
              classId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 1,
              classId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentClasses
          await queryInterface.bulkInsert("studentClasses", [
            {
              semester: 1,
              studentId: 1,
              classId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 2,
              studentId: 2,
              classId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 3,
              studentId: 3,
              classId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 1,
              studentId: 4,
              classId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 2,
              studentId: 5,
              classId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 3,
              studentId: 6,
              classId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 1,
              studentId: 7,
              classId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 2,
              studentId: 8,
              classId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 3,
              studentId: 9,
              classId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              semester: 1,
              studentId: 10,
              classId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentExperienceTypeEvents
          await queryInterface.bulkInsert("studentExperienceTypeEvents", [
            {
              studentExperienceTypeId: 1,
              eventId: 1,
              userId: 1,
              points_earned: 10,
              completed_date: new Date("2025-01-15"),
              unapprove_reason: null,
              reflection_text:
                "This event helped me develop teamwork and leadership skills.",
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 2,
              eventId: 2,
              userId: 2,
              points_earned: 8,
              completed_date: new Date("2025-02-01"),
              unapprove_reason: null,
              reflection_text:
                "I gained valuable insights into the project management process.",
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 3,
              eventId: 3,
              userId: 3,
              points_earned: 15,
              completed_date: new Date("2025-01-30"),
              unapprove_reason: "Did not meet minimum requirements.",
              reflection_text:
                "The event was engaging, but I did not complete all the tasks.",
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 4,
              eventId: 4,
              userId: 4,
              points_earned: 20,
              completed_date: new Date("2025-01-25"),
              unapprove_reason: null,
              reflection_text:
                "The hands-on experience was invaluable for my learning.",
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 5,
              eventId: 5,
              userId: 5,
              points_earned: 5,
              completed_date: new Date("2025-02-10"),
              unapprove_reason: null,
              reflection_text:
                "It was a good experience, though I felt I could have done more.",
              status: "in_progress",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 1,
              eventId: 6,
              userId: 6,
              points_earned: 12,
              completed_date: new Date("2025-01-18"),
              unapprove_reason: null,
              reflection_text:
                "This event gave me a deeper understanding of communication skills.",
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 2,
              eventId: 7,
              userId: 7,
              points_earned: 9,
              completed_date: new Date("2025-02-05"),
              unapprove_reason: null,
              reflection_text:
                "I learned a lot about data analysis and its applications.",
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 3,
              eventId: 8,
              userId: 8,
              points_earned: 14,
              completed_date: new Date("2025-01-22"),
              unapprove_reason: "Failed to submit final report.",
              reflection_text:
                "While I enjoyed the event, I did not complete all the required tasks.",
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 4,
              eventId: 9,
              userId: 9,
              points_earned: 18,
              completed_date: new Date("2025-02-03"),
              unapprove_reason: null,
              reflection_text:
                "This experience sharpened my problem-solving and critical thinking abilities.",
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentExperienceTypeId: 5,
              eventId: 10,
              userId: 10,
              points_earned: 7,
              completed_date: new Date("2025-02-08"),
              unapprove_reason: null,
              reflection_text:
                "I gained hands-on experience, but there was room for improvement.",
              status: "in_progress",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentFlightPlan
          await queryInterface.bulkInsert("studentFlightPlans", [
            {
              studentId: 8,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //1
            {
              studentId: 8,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //2
            {
              studentId: 8,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //3
            // Flight Plan 4 is Spring 2025
            {
              studentId: 1,
              flightPlanId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //4
            {
              studentId: 2,
              flightPlanId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //5
            {
              studentId: 3,
              flightPlanId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //6
            {
              studentId: 4,
              flightPlanId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //7
            {
              studentId: 5,
              flightPlanId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //8
            // Flight Plan 5 is Fall 2025
            {
              studentId: 1,
              flightPlanId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //9
            {
              studentId: 2,
              flightPlanId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //10
            {
              studentId: 3,
              flightPlanId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //11
            {
              studentId: 4,
              flightPlanId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //12
            {
              studentId: 5,
              flightPlanId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //13
            // Flight Plan 6 is Spring 2026
            {
              studentId: 1,
              flightPlanId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //14
            {
              studentId: 2,
              flightPlanId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //15
            {
              studentId: 3,
              flightPlanId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //16
            {
              studentId: 4,
              flightPlanId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //17
            {
              studentId: 5,
              flightPlanId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //18
            // Flight Plan 7 is Fall 2026
            {
              studentId: 1,
              flightPlanId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //19
            {
              studentId: 2,
              flightPlanId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //20
            {
              studentId: 3,
              flightPlanId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //21
            {
              studentId: 4,
              flightPlanId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //22
            {
              studentId: 5,
              flightPlanId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //23
            // Flight Plan 8 is Spring 2027
            {
              studentId: 1,
              flightPlanId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //24
            {
              studentId: 2,
              flightPlanId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //25
            {
              studentId: 3,
              flightPlanId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //26
            {
              studentId: 4,
              flightPlanId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //27
            {
              studentId: 5,
              flightPlanId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //28
            // FLight Plan 9 is Fall 2027
            {
              studentId: 1,
              flightPlanId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //29
            {
              studentId: 2,
              flightPlanId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //30
            {
              studentId: 3,
              flightPlanId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //31
            {
              studentId: 4,
              flightPlanId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //32
            {
              studentId: 5,
              flightPlanId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //33
            // Flight Plan 10 is Spring 2028
            {
              studentId: 1,
              flightPlanId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //34
            {
              studentId: 2,
              flightPlanId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //35
            {
              studentId: 3,
              flightPlanId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //36
            {
              studentId: 4,
              flightPlanId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //37
            {
              studentId: 5,
              flightPlanId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //38
            // Flight Plan 1 is Fall 2023
            {
              studentId: 1,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //39
            {
              studentId: 2,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //40
            {
              studentId: 3,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //41
            {
              studentId: 4,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //42
            {
              studentId: 5,
              flightPlanId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //43
            // Flight Plan 2 is Spring 2024
            {
              studentId: 1,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //44
            {
              studentId: 2,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //45
            {
              studentId: 3,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //46
            {
              studentId: 4,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //47
            {
              studentId: 5,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //48
            // Flight Plan 3 is Fall 2024
            {
              studentId: 1,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //49
            {
              studentId: 2,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //50
            {
              studentId: 3,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //51
            {
              studentId: 4,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //52
            {
              studentId: 5,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //53
          ]);

          // Populate taskBadge
          await queryInterface.bulkInsert("taskBadges", [
            {
              taskId: 1,
              badgeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 2,
              badgeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 3,
              badgeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 4,
              badgeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 5,
              badgeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 6,
              badgeId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 7,
              badgeId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 8,
              badgeId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 9,
              badgeId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 10,
              badgeId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate taskCliftonStrength
          await queryInterface.bulkInsert("taskCliftonStrengths", [
            {
              taskId: 1,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 2,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 3,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 4,
              cliftonStrengthId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 5,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 6,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 7,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 8,
              cliftonStrengthId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 9,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 10,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 11,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 12,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 13,
              cliftonStrengthId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 14,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 15,
              cliftonStrengthId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 16,
              cliftonStrengthId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 17,
              cliftonStrengthId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Clifton Strength
              taskId: 18,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Clifton Strength
              taskId: 19,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Clifton Strength
              taskId: 20,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate taskMajor
          await queryInterface.bulkInsert("taskMajors", [
            {
              taskId: 1,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 2,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 3,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 4,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 5,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 6,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 7,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 8,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 9,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 10,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 11,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 12,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 13,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 14,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 15,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 16,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              taskId: 17,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Major
              taskId: 18,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Major
              taskId: 19,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            { // Testing 'All' Major
              taskId: 20,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate transactions
          await queryInterface.bulkInsert("transactions", [
            {
              points_spent: 100,
              date_approved: new Date(),
              userId: 1,
              studentId: 1,
              awardId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 200,
              date_approved: new Date(),
              userId: 2,
              studentId: 2,
              awardId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 150,
              date_approved: new Date(),
              userId: 3,
              studentId: 3,
              awardId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 250,
              date_approved: new Date(),
              userId: 4,
              studentId: 4,
              awardId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 300,
              date_approved: new Date(),
              userId: 5,
              studentId: 5,
              awardId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 180,
              date_approved: new Date(),
              userId: 6,
              studentId: 6,
              awardId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 220,
              date_approved: new Date(),
              userId: 7,
              studentId: 7,
              awardId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 275,
              date_approved: new Date(),
              userId: 8,
              studentId: 8,
              awardId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 125,
              date_approved: new Date(),
              userId: 9,
              studentId: 9,
              awardId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              points_spent: 90,
              date_approved: new Date(),
              userId: 10,
              studentId: 10,
              awardId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate userRole
          await queryInterface.bulkInsert("userRoles", [
            {
              userId: 1,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 2,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 3,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 4,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 5,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 6,
              roleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 7,
              roleId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 8,
              roleId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 9,
              roleId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 10,
              roleId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // New User Roles
            {
              userId: 11,
              roleId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 12,
              roleId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }

        //Bridge Tables *
        {
          // Populate studentFlightPlanTasks
          await queryInterface.bulkInsert("studentFlightPlanTasks", [
            {
              studentFlightPlanId: 1,
              taskId: 1,
              userId: 1,
              points_earned: 10,
              completed_date: new Date("2025-01-15"),
              unapprove_reason: null,
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 1",
            },
            {
              studentFlightPlanId: 2,
              taskId: 2,
              userId: 2,
              points_earned: 8,
              completed_date: new Date("2025-02-01"),
              unapprove_reason: null,
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 2",
            },
            {
              studentFlightPlanId: 4,
              taskId: 4,
              userId: 4,
              points_earned: 15,
              completed_date: new Date("2025-01-22"),
              unapprove_reason: null,
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 4",
            },
            {
              studentFlightPlanId: 6,
              taskId: 6,
              userId: 6,
              points_earned: 10,
              completed_date: new Date("2025-01-18"),
              unapprove_reason: null,
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 6",
            },
            {
              studentFlightPlanId: 7,
              taskId: 7,
              userId: 7,
              points_earned: 9,
              completed_date: new Date("2025-02-05"),
              unapprove_reason: null,
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 7",
            },
            {
              studentFlightPlanId: 8,
              taskId: 8,
              userId: 8,
              points_earned: 11,
              completed_date: new Date("2025-01-25"),
              unapprove_reason: null,
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 8",
            },
            {
              studentFlightPlanId: 9,
              taskId: 9,
              userId: 9,
              points_earned: 14,
              completed_date: new Date("2025-01-30"),
              unapprove_reason: "Failed to meet deadline.",
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 9",
            },
            {
              studentFlightPlanId: 2,
              taskId: 2,
              userId: 2,
              points_earned: 8,
              completed_date: new Date("2025-02-01"),
              unapprove_reason: null,
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 2",
            },
            {
              studentFlightPlanId: 2,
              taskId: 3,
              userId: 2,
              points_earned: 12,
              completed_date: new Date("2025-02-05"),
              unapprove_reason: "Did not meet minimum criteria.",
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 3",
            },
            {
              studentFlightPlanId: 2,
              taskId: 4,
              userId: 2,
              points_earned: 15,
              completed_date: new Date("2025-02-10"),
              unapprove_reason: null,
              status: "in_progress",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: null,
            },
            {
              studentFlightPlanId: 2,
              taskId: 5,
              userId: 2,
              points_earned: 10,
              completed_date: new Date("2025-02-15"),
              unapprove_reason: "Incomplete submission.",
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: "Reflection 5",
            },
            {
              studentFlightPlanId: 2,
              taskId: 6,
              userId: 2,
              points_earned: 20,
              completed_date: new Date("2025-02-20"),
              unapprove_reason: null,
              status: "in_progress",
              createdAt: new Date(),
              updatedAt: new Date(),
              reflection: null,
            },
            // New Tasks
            // - Strengths Assessment
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 4,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 4,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 4,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 4,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 4,
              userId: 5,
            },

            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 1,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 10,
              taskId: 1,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 1,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 1,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 1,
              userId: 5,
            },

            // More Tasks for each team member
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 2,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 3,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 5,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 6,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 10,
              taskId: 7,
              userId: 2,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 5,
              taskId: 8,
              userId: 2,
            },

            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 2,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 3,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 5,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 6,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 7,
              userId: 1,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 4,
              taskId: 8,
              userId: 1,
            },

            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 2,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 3,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 5,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 6,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 7,
              userId: 3,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 6,
              taskId: 8,
              userId: 3,
            },

            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 2,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 3,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 5,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 6,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 7,
              userId: 4,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 7,
              taskId: 8,
              userId: 4,
            },

            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 2,
              userId: 5,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 3,
              userId: 5,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 5,
              userId: 5,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 6,
              userId: 5,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 7,
              userId: 5,
            },
            {
              points_earned: 0,
              completed_date: null,
              unapprove_reason: null,
              status: "in_progress",
              reflection: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 8,
              taskId: 8,
              userId: 5,
            },
          ]);

          // Populate userRolePermissions
          await queryInterface.bulkInsert("userRolePermissions", [
            {
              userRoleId: 1,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 1,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              userRoleId: 2,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 2,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              userRoleId: 3,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 3,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              userRoleId: 4,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 4,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              userRoleId: 5,
              permissionId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 5,
              permissionId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            //New Permissions
            {
              userRoleId: 7,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 9,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 10,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 11,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userRoleId: 12,
              permissionId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert('studentEvents', [
            // 3 students interested in event 1
            {
              studentId: 1,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 2,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 3,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            
            // 4 students interested in event 2
            {
              studentId: 1,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 2,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 3,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 4,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },

            // 2 students interested in event 3
            {
              studentId: 5,
              eventId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              studentId: 6,
              eventId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },

            // 1 student interested in event 4
            {
              studentId: 7,
              eventId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], 
        {});

      }
        
      }
      // Resume Builder
      {
        // Nondependent Tables
        {
          //roles are in flight-plan section, so only students is needed here
          // Populate students
          await queryInterface.bulkInsert("students", [
            {
              address: "123 Magnolia St, New Orelans, LA",
              graduation_date: new Date("2026-05-02"),
              points: 78,
              total_points: 200,
              student_issued_id: "128456",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "456 Elm St, Metropolis, NY",
              graduation_date: new Date("2025-12-13"),
              points: 78,
              total_points: 100,
              student_issued_id: "134567",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "789 Maple Ave, Gotham, NJ",
              graduation_date: new Date("2027-04-25"),
              points: 78,
              total_points: 150,
              student_issued_id: "145678",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "101 Oak Blvd, Star City, CA",
              graduation_date: new Date("2026-12-13"),
              points: 78,
              total_points: 300,
              student_issued_id: "156789",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "202 Pine Rd, Central City, TX",
              graduation_date: new Date("2025-05-02"),
              points: 78,
              total_points: 170,
              student_issued_id: "167890",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "303 Cedar Ln, Coast City, FL",
              graduation_date: new Date("2027-12-13"),
              points: 78,
              total_points: 230,
              student_issued_id: "178901",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "404 Birch Dr, Fawcett City, OH",
              graduation_date: new Date("2026-04-25"),
              points: 78,
              total_points: 180,
              student_issued_id: "189012",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "505 Spruce Ct, Gateway City, AZ",
              graduation_date: new Date("2025-04-25"),
              points: 78,
              total_points: 340,
              student_issued_id: "190123",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "606 Ash Ave, Ivy Town, WA",
              graduation_date: new Date("2027-05-02"),
              points: 78,
              total_points: 260,
              student_issued_id: "201234",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              address: "707 Sycamore Pl, Midway City, CO",
              graduation_date: new Date("2026-12-13"),
              points: 78,
              total_points: 290,
              student_issued_id: "212345",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }
        // Bridge Tables
        {
          //certifications, education, experiences, interests, links, projects, resumeReviews, skills

          // Populate certifications
          await queryInterface.bulkInsert("certifications", [
            {
              studentId: 1,
              name: "Security+",
              company: "CompTIA",
              date_acquired: new Date("2024-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              name: "Network+",
              company: "CompTIA",
              date_acquired: new Date("2023-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              name: "A+",
              company: "CompTIA",
              date_acquired: new Date("2025-02-25"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              name: "CCNA",
              company: "Cisco",
              date_acquired: new Date("2024-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              name: "CEH",
              company: "EC-Council",
              date_acquired: new Date("2023-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              name: "CISSP",
              company: "ISC2",
              date_acquired: new Date("2025-01-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              name: "PMP",
              company: "PMI",
              date_acquired: new Date("2024-04-25"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              name: "CAPM",
              company: "PMI",
              date_acquired: new Date("2023-04-25"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              name: "ITIL",
              company: "AXELOS",
              date_acquired: new Date("2025-01-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              name: "AWS Certified Solutions Architect",
              company: "Amazon Web Services",
              date_acquired: new Date("2024-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate education
          await queryInterface.bulkInsert("education", [
            {
              studentId: 1,
              degree: "BS in Computer Science with Cybersecurity",
              institution: "Oklahoma Christian University",
              gpa: 4.0,
              graduation_date: new Date("2025-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              degree: "BS in Computer Science with Cybersecurity",
              institution: "Oklahoma Christian University",
              gpa: 3.9,
              graduation_date: new Date("2024-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              degree: "MS in Computer Science",
              institution: "Oklahoma Christian University",
              gpa: 4.0,
              graduation_date: new Date("2025-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              degree: "MS in Computer Science",
              institution: "Oklahoma Christian University",
              gpa: 4.0,
              graduation_date: new Date("2025-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              degree: "MS in Computer Science",
              institution: "Oklahoma Christian University",
              gpa: 3.6,
              graduation_date: new Date("2024-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              degree: "BS in Cybersecurity",
              institution: "University of Florida",
              gpa: 3.8,
              graduation_date: new Date("2026-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              degree: "BS in Project Management",
              institution: "University of Miami",
              gpa: 3.9,
              graduation_date: new Date("2025-04-25"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              degree: "BS in Business Administration",
              institution: "University of South Florida",
              gpa: 3.7,
              graduation_date: new Date("2023-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              degree: "BS in Information Systems Management",
              institution: "University of Texas at Dallas",
              gpa: 3.6,
              graduation_date: new Date("2026-05-02"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              degree: "BS in Computer Science with Software Engineering",
              institution: "University of Washington",
              gpa: 3.8,
              graduation_date: new Date("2024-12-13"),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate experiences
          await queryInterface.bulkInsert("experiences", [
            {
              studentId: 1,
              role: "Cybersecurity Analyst",
              company: "Tinker AFB",
              start_date: new Date("2025-05-02"),
              end_date: new Date("2026-05-02"),
              job_description:
                "Analyzed and monitored network traffic for potential security threats.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              role: "Network Engineer",
              company: "Boeing",
              start_date: new Date("2024-12-13"),
              end_date: new Date("2025-12-13"),
              job_description:
                "Designed and implemented network infrastructure for new office buildings.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              role: "Software Developer",
              company: "Google",
              start_date: new Date("2026-04-25"),
              end_date: new Date("2027-04-25"),
              job_description:
                "Developed new features for Google Chrome browser.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              role: "Data Analyst",
              company: "NASA",
              start_date: new Date("2025-12-13"),
              end_date: new Date("2026-12-13"),
              job_description:
                "Analyzed data from Mars Rover missions to identify patterns and trends.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              role: "Software Engineer",
              company: "Microsoft",
              start_date: new Date("2024-05-02"),
              end_date: new Date("2025-05-02"),
              job_description:
                "Developed new features for Windows operating system.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              role: "Cybersecurity Analyst",
              company: "Lockheed Martin",
              start_date: new Date("2026-12-13"),
              end_date: new Date("2027-12-13"),
              job_description:
                "Conducted security assessments and penetration testing on client networks.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              role: "Project Manager",
              company: "Booz Allen Hamilton",
              start_date: new Date("2025-04-25"),
              end_date: new Date("2026-04-25"),
              job_description:
                "Managed multiple projects for government clients.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              role: "Business Analyst",
              company: "Deloitte",
              start_date: new Date("2023-12-13"),
              end_date: new Date("2024-12-13"),
              job_description:
                "Analyzed business processes and recommended improvements.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              role: "Systems Analyst",
              company: "Accenture",
              start_date: new Date("2026-05-02"),
              end_date: new Date("2027-05-02"),
              job_description:
                "Designed and implemented new systems for client organizations.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              role: "Software Developer",
              company: "Amazon",
              start_date: new Date("2024-12-13"),
              end_date: new Date("2025-12-13"),
              job_description:
                "Developed new features for Amazon Web Services cloud platform.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate interests
          await queryInterface.bulkInsert("interests", [
            {
              studentId: 1,
              name: "Cybersecurity",
              description:
                "Interested in learning about the latest cybersecurity threats and defenses.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              name: "Networking",
              description:
                "Passionate about designing and implementing network infrastructure.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              name: "Software Development",
              description:
                "Enjoys coding and building new software applications.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              name: "Data Analysis",
              description:
                "Fascinated by data and its potential to drive decision-making.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              name: "Software Engineering",
              description: "Loves designing and building software systems.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              name: "Penetration Testing",
              description:
                "Enjoys finding and fixing security vulnerabilities in networks.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              name: "Project Management",
              description:
                "Passionate about leading teams and delivering successful projects.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              name: "Business Analysis",
              description:
                "Interested in analyzing business processes and improving efficiency.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              name: "Systems Analysis",
              description:
                "Enjoys designing and implementing new systems for organizations.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              name: "Cloud Computing",
              description:
                "Passionate about building and managing cloud-based services.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate links
          await queryInterface.bulkInsert("links", [
            {
              studentId: 1,
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/anthonypham",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              name: "GitHub",
              link: "https://www.github.com/abbycrockett",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              name: "Portfolio",
              link: "https://www.bill-le.com",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/jennastilling",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              name: "GitHub",
              link: "https://www.github.com/arriantaton",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              name: "Portfolio",
              link: "https://www.danadavis.com",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/evemartin",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              name: "GitHub",
              link: "https://www.github.com/frankg",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              name: "Portfolio",
              link: "https://www.gracer.com",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/hannah-martinez",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate projects
          await queryInterface.bulkInsert("projects", [
            {
              studentId: 1,
              name: "Network Security Project",
              description:
                "Designed & implemented a secure network for a small business.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              name: "Web Development Project",
              description:
                "Built a responsive website for a local nonprofit organization.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              name: "Machine Learning Project",
              description:
                "Developed a model to predict stock prices using historical data.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              name: "Data Analysis Project",
              description:
                "Analyzed customer data to identify trends and improve marketing strategies.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              name: "Software Development Project",
              description:
                "Built a mobile app for tracking fitness goals and progress.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              name: "Penetration Testing Project",
              description:
                "Conducted security assessments on a client network to identify vulnerabilities.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              name: "Project Management Project",
              description:
                "Led a team to successfully deliver a software development project on time and within budget.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              name: "Business Analysis Project",
              description:
                "Analyzed business processes to identify inefficiencies and recommend improvements.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              name: "Systems Analysis Project",
              description:
                "Designed and implemented a new system for managing customer data.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              name: "Cloud Computing Project",
              description:
                "Built a cloud-based application for storing and sharing files.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeReviews?
          await queryInterface.bulkInsert("resumeReviews", [
            {
              studentId: 1,
              notes: "Is this resume good for intership at Paycom?",
              suggestion: "Great resume! Very well-organized and easy to read.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              notes: "Is this resume good for intership at Google?",
              suggestion:
                "Good resume. Could use more details about projects and experiences.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              notes: "Is this resume good for intership at Microsoft?",
              suggestion: "Needs improvement. Work on formatting and content.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              notes: "Is this resume good for intership at Amazon?",
              suggestion:
                "Excellent resume! Very impressive experiences and projects.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              notes: "Is this resume good for intership at Facebook?",
              suggestion:
                "Good start. Add more details about skills and certifications.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              notes: "Is this resume good for intership at Apple?",
              suggestion:
                "Needs work. Focus on highlighting key experiences and skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              notes: "Is this resume good for intership at Tesla?",
              suggestion: "Great resume! Very well-organized and easy to read.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              notes: "Is this resume good for intership at SpaceX?",
              suggestion:
                "Good resume. Could use more details about projects and experiences.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              notes: "Is this resume good for intership at IBM?",
              suggestion: "Needs improvement. Work on formatting and content.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              notes: "Is this resume good for intership at Intel?",
              suggestion:
                "Excellent resume! Very impressive experiences and projects.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate skills
          await queryInterface.bulkInsert("skills", [
            {
              studentId: 1,
              name: "Network Security",
              description: "Expert",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              name: "Web Development",
              description: "Advanced",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              name: "Machine Learning",
              description: "Intermediate",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              name: "Data Analysis",
              description: "Expert",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              name: "Software Development",
              description: "Beginner",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              name: "Penetration Testing",
              description: "Expert",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              name: "Project Management",
              description: "Advanced",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              name: "Business Analysis",
              description: "Beginner",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              name: "Systems Analysis",
              description: "Intermediate",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              name: "Cloud Computing",
              description: "Advanced",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }
        // Bridge Tables +
        {
          //courses, resumes, resumeCertifications, resumeEducations, resumeExperiences, resumeInterests
          //resumeLinks, resumeProjects, resumeSkills, & userResumeReviews

          // Populate courses
          await queryInterface.bulkInsert("courses", [
            {
              educationId: 1,
              studentId: 1,
              name: "Introduction to Cybersecurity",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 1,
              studentId: 1,
              name: "Network Security",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 1,
              studentId: 1,
              name: "Parallel Programming",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 2,
              studentId: 2,
              name: "Parallel Programming",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 2,
              studentId: 2,
              name: "Network Security",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 2,
              studentId: 2,
              name: "Software Engineering IV",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 3,
              studentId: 3,
              name: "Data Structures & Algorithms",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 3,
              studentId: 3,
              name: "Data Mining",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 3,
              studentId: 3,
              name: "Machine Learning",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 4,
              studentId: 4,
              name: "Data Mining",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 4,
              studentId: 4,
              name: "Data Structures & Algorithms",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 4,
              studentId: 4,
              name: "Software Engineering IV",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 5,
              studentId: 5,
              name: "Software Engineering III",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 5,
              studentId: 5,
              name: "Introudction to AI",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 6,
              studentId: 6,
              name: "Penetration Testing",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 7,
              studentId: 7,
              name: "Project Management",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 8,
              studentId: 8,
              name: "Business Analysis",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 9,
              studentId: 9,
              name: "Systems Analysis",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              educationId: 10,
              studentId: 10,
              name: "Cloud Computing",
              grade: "A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumes
          await queryInterface.bulkInsert("resumes", [
            {
              resumeReviewId: 1,
              studentId: 1,
              name: "Anthony Pham Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 2,
              studentId: 2,
              name: "Abby Crockett Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 3,
              studentId: 3,
              name: "Bill Le Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 4,
              studentId: 4,
              name: "Jenna Stilling Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 5,
              studentId: 5,
              name: "Arrian Taton Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 6,
              studentId: 6,
              name: "Dana Davis Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 7,
              studentId: 7,
              name: "Eve Martin Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 8,
              studentId: 8,
              name: "Frank G Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 9,
              studentId: 9,
              name: "Grace R Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeReviewId: 10,
              studentId: 10,
              name: "Hannah Martinez Resume",
              template_type: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeCertifications
          await queryInterface.bulkInsert("resumeCertifications", [
            {
              resumeId: 1,
              certificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 1,
              certificationId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              certificationId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              certificationId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              certificationId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              certificationId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              certificationId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              certificationId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              certificationId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              certificationId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              certificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              certificationId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              certificationId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              certificationId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              certificationId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              certificationId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              certificationId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              certificationId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              certificationId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              certificationId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeEducations
          await queryInterface.bulkInsert("resumeEducations", [
            {
              resumeId: 1,
              educationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              educationId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              educationId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              educationId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              educationId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              educationId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              educationId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              educationId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              educationId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              educationId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeExperiences
          await queryInterface.bulkInsert("resumeExperiences", [
            {
              resumeId: 1,
              experienceId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              experienceId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              experienceId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              experienceId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              experienceId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              experienceId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              experienceId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              experienceId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              experienceId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              experienceId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeInterests
          await queryInterface.bulkInsert("resumeInterests", [
            {
              resumeId: 1,
              interestId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              interestId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              interestId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              interestId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              interestId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              interestId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              interestId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              interestId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              interestId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              interestId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeLinks
          await queryInterface.bulkInsert("resumeLinks", [
            {
              resumeId: 1,
              linkId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              linkId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              linkId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              linkId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              linkId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              linkId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              linkId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              linkId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              linkId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              linkId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeProjects
          await queryInterface.bulkInsert("resumeProjects", [
            {
              resumeId: 1,
              projectId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              projectId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              projectId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              projectId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              projectId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              projectId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              projectId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              projectId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              projectId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              projectId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate resumeSkills
          await queryInterface.bulkInsert("resumeSkills", [
            {
              resumeId: 1,
              skillId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              skillId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              skillId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              skillId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              skillId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              skillId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              skillId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              skillId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              skillId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              skillId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate userResumeReviews
          await queryInterface.bulkInsert("userResumeReviews", [
            {
              userId: 1,
              resumeReviewId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 2,
              resumeReviewId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 3,
              resumeReviewId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 4,
              resumeReviewId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 5,
              resumeReviewId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 6,
              resumeReviewId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 7,
              resumeReviewId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 8,
              resumeReviewId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 9,
              resumeReviewId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              userId: 10,
              resumeReviewId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }
        // Bridge Tables *
        {
          //resumeCourses
          await queryInterface.bulkInsert("resumeCourses", [
            {
              resumeId: 1,
              educationId: 1,
              courseId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 2,
              educationId: 2,
              courseId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 3,
              educationId: 3,
              courseId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 4,
              educationId: 4,
              courseId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 5,
              educationId: 5,
              courseId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 6,
              educationId: 6,
              courseId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 7,
              educationId: 7,
              courseId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 8,
              educationId: 8,
              courseId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 9,
              educationId: 9,
              courseId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              resumeId: 10,
              educationId: 10,
              courseId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        }
      }
    }
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    // Eagle Flight Plan
    {
      // Nondependent Tables
      {
        await queryInterface.bulkDelete("awards", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("badges", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("cliftonStrengths", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("experienceTypes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("majors", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("permissions", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("roles", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("students", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("semesters", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("verifications", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }

      // Bridge Tables
      {
        await queryInterface.bulkDelete("badgeExperienceTypes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("classes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("documents", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("events", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("experienceTypeMajors", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("flightPlans", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("rolePermissions", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentBadges", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentCliftonStrengths", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentExperienceTypes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentMajors", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("tasks", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("users", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }

      // Bridge Tables +
      {
        await queryInterface.bulkDelete("experienceTypeEvents", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("eventCliftonStrengths", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("flightPlanExperienceTypes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("flightPlanTasks", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("professorClasses", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentClasses", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentExperienceTypeEvents", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentFlightPlans", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("taskBadges", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("taskCliftonStrengths", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("taskMajors", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("transactions", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("userRoles", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }

      // Bridge Tables *
      {
        await queryInterface.bulkDelete('studentFlightPlanTasks', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete('userRolePermissions', null, { truncate: true, cascade: true, restartIdentity: true });
        await queryInterface.bulkDelete("studentEvents", null, { truncate: true, cascade: true, restartIdentity: true});
      }
    }
    // Resume Builder
    {
      // Nondependent Tables
      {
        await queryInterface.bulkDelete("adminRoles", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("reviewerRoles", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("roles", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("students", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }
      // Bridge Tables
      {
        await queryInterface.bulkDelete("certifications", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("education", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("experiences", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("interests", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("links", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("projects", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeReviews", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("skills", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }
      // Bridge Tables +
      {
        await queryInterface.bulkDelete("courses", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumes", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeCertifications", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeEducations", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeExperiences", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeInterests", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeLinks", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeProjects", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("resumeSkills", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("userResumeReviews", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }
      // Bridge Tables *
      {
        await queryInterface.bulkDelete("resumeCourses", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
      }
    }
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  },
};
