"use strict";

const path = require('path');
const fs = require('fs');

function loadLocalImage(imageName) {
  const imagePath = path.join(__dirname, 'images', imageName);
  return fs.readFileSync(imagePath);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

    // Award Images:
    const blazerImageBuffer = loadLocalImage('blazer.png');
    const tieImageBuffer = loadLocalImage('tie.png');
    const skirtImageBuffer = loadLocalImage('skirt.png');
    const headshotImageBuffer = loadLocalImage('headshot.png');
    const concertImageBuffer = loadLocalImage('concert.png');
    const waterBottleImageBuffer = loadLocalImage('waterbottle.png');
    const proPackageImageBuffer = loadLocalImage('propackage.png');
    const shoesImageBuffer = loadLocalImage('shoes.png');
    const pantsImageBuffer = loadLocalImage('pants.png');
    const watchImageBuffer = loadLocalImage('watch.png');

    // Badge Images:
    const beginnerExplorerImageBuffer = loadLocalImage('explorer.png');
    const masterStrategistImageBuffer = loadLocalImage('strategy.png');
    const speedRunnerImageBuffer = loadLocalImage('runner.png');
    const ultimateCollectorImageBuffer = loadLocalImage('collector.png');
    const teamPlayerImageBuffer = loadLocalImage('teamplayer.png');
    const problemSolverImageBuffer = loadLocalImage('problemsolver.png');
    const perfectionistImageBuffer = loadLocalImage('perfect.png');
    const marathonRunnerImageBuffer = loadLocalImage('mrunner.png');
    const eliteChampionImageBuffer = loadLocalImage('elite.png');
    const legendaryStatusImageBuffer = loadLocalImage('legend.png');

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
          await queryInterface.bulkDelete(
            "experienceTypeCliftonStrengths",
            null,
            {
              truncate: true,
              cascade: true,
              restartIdentity: true,
            }
          );
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
          await queryInterface.bulkDelete("studentFlightPlanExperienceTypes", null, {
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
          await queryInterface.bulkDelete("eventMajors", null, {
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
          await queryInterface.bulkDelete("studentFlightPlanExperienceTypeEvents", null, {
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
          await queryInterface.bulkDelete("studentFlightPlanTasks", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("userRolePermissions", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
          await queryInterface.bulkDelete("studentEvents", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
          });
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
          // Populate awards:
          // - I'm inserting them one by one because the packet size
          //  would be too large if I inserted them all at once
          await queryInterface.bulkInsert("awards", [
            {
              name: "Professional Attire Package",
              description: "Includes a matching blazer, pants, and tie.",
              cost: 500,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: proPackageImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Professional Headshot",
              description: "Receive a professional headshot session.",
              cost: 300,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: headshotImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "OC Water Bottle",
              description: "High-quality OC water bottle.",
              cost: 150,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: waterBottleImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Dawson Hollow Concert Ticket",
              description: "Includes tickets to the Dawson Hollow concert.",
              cost: 200,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: concertImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Classic Watch",
              description: "Starter watch for your professional wardrobe.",
              cost: 400,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: watchImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Stylish Blazer",
              description: "Receive a fitted professional blazer.",
              cost: 400,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: blazerImageBuffer,
              image_type: "url",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Formal Pants",
              description: "Classic pants suitable for business settings.",
              cost: 300,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: pantsImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Formal Tie",
              description: "Elegant tie to complement your business attire.",
              cost: 100,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: tieImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Formal Pencil Skirt",
              description: "Classy skirt for warm days.",
              cost: 250,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: skirtImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("awards", [
            {
              name: "Work Shoes",
              description: "Available sizes will vary.",
              cost: 1200,
              redemption_type: "in_person",
              redemption_info: "Pick up at Career Services office.",
              image: shoesImageBuffer,
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
              image: beginnerExplorerImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Master Strategist",
              description: "Given to players who complete all strategic levels.",
              type: "task_experience_completion",
              points: 500,
              image: masterStrategistImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Speed Runner",
              description: "For finishing your first Flightplan",
              type: "flightplan_completion",
              points: 300,
              image: speedRunnerImageBuffer,
              image_type: "png",
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Ultimate Collector",
              description: "Earned by collecting all available items.",
              type: "task_completion",
              points: 700,
              image: ultimateCollectorImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Team Player",
              description: "Awarded for participating in a team event.",
              type: "experience_completion",
              points: 400,
              image: teamPlayerImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Problem Solver",
              description: "Given to those who solve a difficult puzzle.",
              type: "experience_completion",
              points: 350,
              image: problemSolverImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              id: 7,
              name: "Perfectionist",
              description: "Earned by completing every possible task and experience.",
              type: "task_experience_completion",
              points: 600,
              image: perfectionistImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Marathon Runner",
              description: "For completing your last Flightplan.",
              type: "flightplan_completion",
              points: 450,
              semester_from_grad: 1,
              image: marathonRunnerImageBuffer,
              image_type: "jpg",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Elite Champion",
              description: "Awarded to tournament winners.",
              type: "experience_completion",
              points: 800,
              image: eliteChampionImageBuffer,
              image_type: "png",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          await queryInterface.bulkInsert("badges", [
            {
              name: "Legendary Status",
              description: "The highest badge for exceptional performance.",
              type: "task_completion",
              points: 1000,
              image: legendaryStatusImageBuffer,
              image_type: "png",
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
              name: "All",
              description: "All of the Clifton Strengths in the System",
              category: "all",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate experienceType
          await queryInterface.bulkInsert("experienceTypes", [
            {
              category: "mentoring",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Mentor Match Program",
              description:
                "Join a short-term mentor matching event with professionals.",
              rational:
                "Provides insight from experienced individuals in the field.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Leadership Through Service",
              description: "Lead a campus volunteer group or initiative.",
              rational:
                "Builds leadership through giving back to the community.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "career_prep",
              req_reflection: false,
              schedule_type: "special_event",
              name: "Career Fair Blitz",
              description:
                "Attend a major campus career fair and talk to employers.",
              rational:
                "Explores job opportunities and improves communication skills.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "other",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Growth Journal",
              description:
                "Write a personal reflection journal on your college journey.",
              rational:
                "Encourages self-awareness and long-term growth tracking.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              req_reflection: false,
              schedule_type: "one_time",
              name: "LinkedIn Optimization",
              description:
                "Attend a session to improve your LinkedIn profile.",
              rational: "Enhances your digital professional presence.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Academic Tutoring",
              description: "Provide tutoring for a class in your major.",
              rational:
                "Reinforces subject knowledge and supports peers academically.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Personal Vision Statement",
              description:
                "Craft a vision statement based on your values and strengths.",
              rational:
                "Clarifies goals and aligns personal and professional growth.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "mentoring",
              req_reflection: false,
              schedule_type: "every_semester",
              name: "Mentor Check-ins",
              description: "Meet regularly with your assigned peer mentor.",
              rational: "Fosters consistent growth through peer support.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              req_reflection: true,
              schedule_type: "special_event",
              name: "Study Skills Workshop",
              description:
                "Attend a session focused on study techniques and habits.",
              rational:
                "Strengthens time management and learning strategies.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "career_prep",
              req_reflection: false,
              schedule_type: "one_time",
              name: "Mock Interview Marathon",
              description:
                "Participate in a mock interview with a career advisor.",
              rational:
                "Prepares for real-world job interviews through practice.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Volunteer for a Cause",
              description:
                "Spend a day helping with a local food bank or shelter.",
              rational:
                "Supports the local community while building empathy.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Run a Campus Initiative",
              description:
                "Organize or lead a student-led project on campus.",
              rational:
                "Teaches initiative, organization, and impact leadership.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              req_reflection: false,
              schedule_type: "special_event",
              name: "Library Research Bootcamp",
              description:
                "Join a hands-on library session to build research skills.",
              rational:
                "Improves academic resourcefulness and citation accuracy.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Life Mapping Exercise",
              description:
                "Create a visual life map to explore your strengths and past.",
              rational:
                "Encourages deep reflection on experiences and motivations.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "other",
              req_reflection: false,
              schedule_type: "one_time",
              name: "Digital Wellness Session",
              description:
                "Learn techniques for managing digital distractions.",
              rational:
                "Improves focus and mental well-being in tech-heavy lives.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              req_reflection: true,
              schedule_type: "every_semester",
              name: "Industry Talks",
              description:
                "Attend guest speaker events featuring professionals.",
              rational: "Connects academic learning to real-world careers.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "career_prep",
              req_reflection: true,
              schedule_type: "one_time",
              name: "Job Shadowing Experience",
              description:
                "Shadow a professional in a field you're interested in.",
              rational:
                "Provides clarity on career path and daily responsibilities.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              req_reflection: false,
              schedule_type: "every_semester",
              name: "Semester of Service",
              description: "Volunteer consistently throughout the semester.",
              rational:
                "Builds long-term community relationships and impact.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "other",
              req_reflection: true,
              schedule_type: "special_event",
              name: "Life Skills Expo",
              description:
                "Attend workshops on budgeting, cooking, and self-care.",
              rational: "Prepares students for life beyond college.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "mentoring",
              req_reflection: false,
              schedule_type: "one_time",
              name: "Mentor Coffee Chat",
              description:
                "Have an informal conversation with a professional mentor.",
              rational: "Encourages relationship-building and curiosity.",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
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
              name: "All",
              description: "All Majors in the System",
              department: "N/A",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
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
              type: "reflection",
              public_google_form_url: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "csv_upload",
              public_google_form_url: "http://example.com/verification-form2",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "reflection",
              public_google_form_url: "http://example.com/verification-form3",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "quiz",
              public_google_form_url: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "csv_upload",
              public_google_form_url: "http://example.com/verification-form4",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "required_document",
              public_google_form_url: "http://example.com/verification-form5",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "quiz",
              public_google_form_url: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "required_document",
              public_google_form_url: "http://example.com/verification-form6",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "csv_upload",
              public_google_form_url: "http://example.com/verification-form7",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              type: "quiz",
              public_google_form_url: "http://example.com/verification-form8",
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
            // Perfecitonist Badge
            { badgeId: 7, experienceTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 4, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 5, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 6, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 8, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 9, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 10, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 11, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 12, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 13, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 14, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 15, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 16, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 17, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 18, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 19, createdAt: new Date(), updatedAt: new Date() },
            { badgeId: 7, experienceTypeId: 20, createdAt: new Date(), updatedAt: new Date() },
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

          await queryInterface.bulkInsert("events", [
            {
              name: "Tech Industry Career Fair",
              description:
                "Meet top tech companies and explore job opportunities.",
              event_type: "career_fair",
              date: new Date("2025-04-15"),
              start_date_time: new Date("2025-04-15T10:00:00"),
              end_date_time: new Date("2025-04-15T16:00:00"),
              location: "University Expo Center",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Leadership in Mentorship",
              description:
                "How to be an effective mentor and guide for others.",
              event_type: "mentoring",
              date: new Date("2025-04-20"),
              start_date_time: new Date("2025-04-20T14:00:00"),
              end_date_time: new Date("2025-04-20T16:00:00"),
              location: "Student Leadership Center",
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
              name: "Networking Lunch with Alumni",
              description:
                "Connect with successful alumni and grow your professional network.",
              event_type: "lunch_and_learn",
              date: new Date("2025-04-22"),
              start_date_time: new Date("2025-04-22T12:00:00"),
              end_date_time: new Date("2025-04-22T13:30:00"),
              location: "Alumni Hall",
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
              name: "Personal Branding Workshop",
              description:
                "Learn how to build and showcase your personal brand.",
              event_type: "career_services",
              date: new Date("2025-04-25"),
              start_date_time: new Date("2025-04-25T15:00:00"),
              end_date_time: new Date("2025-04-25T17:00:00"),
              location: "Career Services Center",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 8,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Strengths-Based Leadership",
              description:
                "Discover and develop your strengths to become a better leader.",
              event_type: "galup_strengths_class",
              date: new Date("2025-05-01"),
              start_date_time: new Date("2025-05-01T13:00:00"),
              end_date_time: new Date("2025-05-01T15:00:00"),
              location: "Leadership Academy",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 11,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Women in STEM Club Meeting",
              description:
                "Join us for discussions and networking with women in STEM fields.",
              event_type: "club",
              date: new Date("2025-04-17"),
              start_date_time: new Date("2025-04-17T18:00:00"),
              end_date_time: new Date("2025-04-17T20:00:00"),
              location: "Engineering Lounge",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 9,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Resume Review & Critique",
              description: "Have your resume reviewed by career professionals.",
              event_type: "career_services",
              date: new Date("2025-04-19"),
              start_date_time: new Date("2025-04-19T10:00:00"),
              end_date_time: new Date("2025-04-19T12:00:00"),
              location: "Career Center",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 7,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Public Speaking for Career Success",
              description:
                "Improve your public speaking skills to stand out in your career.",
              event_type: "career_services",
              date: new Date("2025-04-29"),
              start_date_time: new Date("2025-04-29T16:00:00"),
              end_date_time: new Date("2025-04-29T18:00:00"),
              location: "Communication Studies Hall",
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
              name: "Financial Literacy for Students",
              description:
                "Learn essential financial skills, from budgeting to investing.",
              event_type: "academic",
              date: new Date("2025-04-24"),
              start_date_time: new Date("2025-04-24T12:30:00"),
              end_date_time: new Date("2025-04-24T13:30:00"),
              location: "Student Union",
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
              name: "Building a Career in Esports",
              description:
                "Explore career opportunities in the growing esports industry.",
              event_type: "extra_curricular",
              date: new Date("2025-05-03"),
              start_date_time: new Date("2025-05-03T14:00:00"),
              end_date_time: new Date("2025-05-03T16:00:00"),
              location: "Gaming Innovation Hub",
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
              name: "AI & Ethics Panel Discussion",
              description:
                "Explore the ethical implications of artificial intelligence.",
              event_type: "academic",
              date: new Date("2025-05-07"),
              start_date_time: new Date("2025-05-07T15:00:00"),
              end_date_time: new Date("2025-05-07T17:00:00"),
              location: "Tech Ethics Hall",
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
              name: "Cybersecurity Careers: Industry Insights",
              description:
                "Learn about career opportunities in the growing field of cybersecurity.",
              event_type: "career_fair",
              date: new Date("2025-04-30"),
              start_date_time: new Date("2025-04-30T10:00:00"),
              end_date_time: new Date("2025-04-30T14:00:00"),
              location: "Cybersecurity Innovation Center",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 14,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mastering LinkedIn for Career Growth",
              description:
                "Learn how to optimize your LinkedIn profile and network effectively.",
              event_type: "career_services",
              date: new Date("2025-05-02"),
              start_date_time: new Date("2025-05-02T13:00:00"),
              end_date_time: new Date("2025-05-02T14:30:00"),
              location: "Career Center",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Strengths-Based Teamwork Workshop",
              description:
                "Discover how to apply Gallup Strengths in team settings.",
              event_type: "galup_strengths_class",
              date: new Date("2025-05-05"),
              start_date_time: new Date("2025-05-05T14:00:00"),
              end_date_time: new Date("2025-05-05T16:00:00"),
              location: "Leadership Development Room",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 9,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Future of Space Exploration",
              description:
                "Join experts in discussing upcoming space missions and technologies.",
              event_type: "academic",
              date: new Date("2025-05-10"),
              start_date_time: new Date("2025-05-10T16:00:00"),
              end_date_time: new Date("2025-05-10T18:00:00"),
              location: "Astronomy Center",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 13,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Film Studies Club: The Art of Storytelling",
              description:
                "A deep dive into cinematic storytelling techniques.",
              event_type: "academic",
              date: new Date("2025-04-28"),
              start_date_time: new Date("2025-04-28T18:30:00"),
              end_date_time: new Date("2025-04-28T20:30:00"),
              location: "Student Film Center",
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
              name: "How to Ace Technical Interviews",
              description:
                "Strategies and practice questions for software engineering interviews.",
              event_type: "career_services",
              date: new Date("2025-05-08"),
              start_date_time: new Date("2025-05-08T14:00:00"),
              end_date_time: new Date("2025-05-08T16:00:00"),
              location: "Engineering Career Center",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 11,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Leadership in Community Service",
              description:
                "How leadership skills can be applied to community service initiatives.",
              event_type: "mentoring",
              date: new Date("2025-05-06"),
              start_date_time: new Date("2025-05-06T15:30:00"),
              end_date_time: new Date("2025-05-06T17:00:00"),
              location: "Community Engagement Office",
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
              name: "Startup Pitch Competition",
              description:
                "Compete or watch as students pitch innovative startup ideas.",
              event_type: "extra_curricular",
              date: new Date("2025-05-12"),
              start_date_time: new Date("2025-05-12T17:00:00"),
              end_date_time: new Date("2025-05-12T19:00:00"),
              location: "Entrepreneurship Hub",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 14,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Effective Time Management for Students",
              description:
                "Learn practical strategies to better manage your time and workload.",
              event_type: "career_services",
              date: new Date("2025-05-04"),
              start_date_time: new Date("2025-05-04T12:30:00"),
              end_date_time: new Date("2025-05-04T13:30:00"),
              location: "Student Success Center",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 8,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "AI and Society: A Roundtable Discussion",
              description:
                "Discuss the role of artificial intelligence in shaping our future society.",
              event_type: "academic",
              date: new Date("2025-05-15"),
              start_date_time: new Date("2025-05-15T14:00:00"),
              end_date_time: new Date("2025-05-15T16:00:00"),
              location: "Technology Ethics Lab",
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
              name: "Navigating the Future of Green Technologies",
              description:
                "Explore advancements in sustainable tech and their impact on the future.",
              event_type: "academic",
              date: new Date("2025-05-20"),
              start_date_time: new Date("2025-05-20T13:00:00"),
              end_date_time: new Date("2025-05-20T15:00:00"),
              location: "Sustainability Lab",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 13,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Social Media Marketing Strategies for Entrepreneurs",
              description:
                "Learn to leverage social media for building a strong brand presence.",
              event_type: "career_services",
              date: new Date("2025-05-18"),
              start_date_time: new Date("2025-05-18T10:00:00"),
              end_date_time: new Date("2025-05-18T12:00:00"),
              location: "Entrepreneurship Center",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 11,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Building a Personal Brand Online",
              description:
                "Discover strategies to build a personal brand for your career or business.",
              event_type: "career_services",
              date: new Date("2025-05-13"),
              start_date_time: new Date("2025-05-13T12:00:00"),
              end_date_time: new Date("2025-05-13T13:00:00"),
              location: "Student Lounge",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Understanding Blockchain Technology",
              description:
                "Learn the basics of blockchain and its applications in various industries.",
              event_type: "academic",
              date: new Date("2025-05-21"),
              start_date_time: new Date("2025-05-21T14:00:00"),
              end_date_time: new Date("2025-05-21T16:00:00"),
              location: "Tech Lab 1",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 14,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Writing Effective Resumes & Cover Letters",
              description:
                "Tips and tricks for crafting standout resumes and cover letters.",
              event_type: "career_services",
              date: new Date("2025-05-16"),
              start_date_time: new Date("2025-05-16T10:00:00"),
              end_date_time: new Date("2025-05-16T12:00:00"),
              location: "Career Services Office",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 9,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Career Opportunities in Biomedical Engineering",
              description:
                "Explore the latest trends in biomedical engineering and career paths.",
              event_type: "career_fair",
              date: new Date("2025-05-25"),
              start_date_time: new Date("2025-05-25T09:00:00"),
              end_date_time: new Date("2025-05-25T12:00:00"),
              location: "Biotech Center",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "The Future of Renewable Energy",
              description:
                "Join experts as they discuss advancements in renewable energy technologies.",
              event_type: "academic",
              date: new Date("2025-05-30"),
              start_date_time: new Date("2025-05-30T11:00:00"),
              end_date_time: new Date("2025-05-30T13:00:00"),
              location: "Green Energy Auditorium",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 13,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Exploring Careers in Data Science",
              description:
                "Learn about opportunities and career paths in data science.",
              event_type: "career_fair",
              date: new Date("2025-06-02"),
              start_date_time: new Date("2025-06-02T09:00:00"),
              end_date_time: new Date("2025-06-02T12:00:00"),
              location: "Data Science Center",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 14,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Building a Career in Digital Marketing",
              description:
                "Explore strategies and job opportunities in digital marketing.",
              event_type: "mentoring",
              date: new Date("2025-06-03"),
              start_date_time: new Date("2025-06-03T16:00:00"),
              end_date_time: new Date("2025-06-03T18:00:00"),
              location: "Marketing Hub",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "scheduled",
              point_value: 1,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "AI & Robotics Club Meetup",
              description:
                "Join the AI & Robotics Club to discuss advancements in robotics and AI technologies.",
              event_type: "club",
              date: new Date("2025-04-20"),
              start_date_time: new Date("2025-04-20T15:00:00"),
              end_date_time: new Date("2025-04-20T17:00:00"),
              location: "Engineering Building, Room 105",
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
              name: "Leadership and Communication Skills Workshop",
              description:
                "Enhance your leadership and communication skills with this workshop.",
              event_type: "career_services",
              date: new Date("2025-04-22"),
              start_date_time: new Date("2025-04-22T10:00:00"),
              end_date_time: new Date("2025-04-22T12:00:00"),
              location: "Student Center",
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
              name: "Annual Career Fair",
              description:
                "Meet with top companies looking to hire interns and full-time employees.",
              event_type: "career_fair",
              date: new Date("2025-04-23"),
              start_date_time: new Date("2025-04-23T09:00:00"),
              end_date_time: new Date("2025-04-23T14:00:00"),
              location: "Convention Center",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Mentoring Session: Software Development",
              description:
                "Connect with mentors in the software development field for guidance and advice.",
              event_type: "mentoring",
              date: new Date("2025-04-25"),
              start_date_time: new Date("2025-04-25T13:00:00"),
              end_date_time: new Date("2025-04-25T15:00:00"),
              location: "Career Center",
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
              name: "Career Services: Interview Prep Workshop",
              description:
                "Prepare for your upcoming job interviews with expert tips and mock sessions.",
              event_type: "career_services",
              date: new Date("2025-04-27"),
              start_date_time: new Date("2025-04-27T11:00:00"),
              end_date_time: new Date("2025-04-27T13:00:00"),
              location: "Career Center",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Lunch & Learn: Effective Networking",
              description:
                "Learn how to network effectively in professional settings while enjoying lunch.",
              event_type: "lunch_and_learn",
              date: new Date("2025-04-29"),
              start_date_time: new Date("2025-04-29T12:00:00"),
              end_date_time: new Date("2025-04-29T13:30:00"),
              location: "Student Center",
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
              name: "Galup Strengths Class: Discover Your Strengths",
              description:
                "Take the Gallup StrengthsFinder assessment and learn how to leverage your strengths.",
              event_type: "galup_strengths_class",
              date: new Date("2025-05-01"),
              start_date_time: new Date("2025-05-01T14:00:00"),
              end_date_time: new Date("2025-05-01T16:00:00"),
              location: "Career Center",
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
              name: "Volunteering: Community Cleanup",
              description:
                "Join us in cleaning up the community and making a difference.",
              event_type: "volunteer",
              date: new Date("2025-05-03"),
              start_date_time: new Date("2025-05-03T08:00:00"),
              end_date_time: new Date("2025-05-03T12:00:00"),
              location: "City Park",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 6,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Networking Night: Meet the Professionals",
              description:
                "Meet industry professionals and learn about career opportunities in various fields.",
              event_type: "career_fair",
              date: new Date("2025-05-05"),
              start_date_time: new Date("2025-05-05T17:00:00"),
              end_date_time: new Date("2025-05-05T19:00:00"),
              location: "Alumni Hall",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 12,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Tech Career Workshop: Building a Portfolio",
              description:
                "Learn how to build a compelling portfolio that highlights your tech skills and projects.",
              event_type: "career_services",
              date: new Date("2025-05-07"),
              start_date_time: new Date("2025-05-07T10:00:00"),
              end_date_time: new Date("2025-05-07T12:00:00"),
              location: "Tech Center",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Sustainability in Action: Campus Clean-Up",
              description:
                "Join fellow students to help clean and green our campus environment.",
              event_type: "volunteer",
              date: new Date("2025-03-31"),
              start_date_time: new Date("2025-03-31T09:00:00"),
              end_date_time: new Date("2025-03-31T12:00:00"),
              location: "Student Quad",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "completed",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Academic Excellence Roundtable",
              description:
                "Discuss strategies for academic success with faculty and peers.",
              event_type: "academic",
              date: new Date("2025-04-01"),
              start_date_time: new Date("2025-04-01T14:00:00"),
              end_date_time: new Date("2025-04-01T15:30:00"),
              location: "Library Conference Room A",
              attendance_type: "in_person",
              registration: "handshake",
              custom: false,
              status: "completed",
              point_value: 8,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Robotics Club: Spring Showcase",
              description:
                "Explore student-built robots and automation projects.",
              event_type: "club",
              date: new Date("2025-04-02"),
              start_date_time: new Date("2025-04-02T16:00:00"),
              end_date_time: new Date("2025-04-02T18:00:00"),
              location: "Engineering Lab",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "completed",
              point_value: 12,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Philosophy Society Debate Night",
              description:
                "Join a spirited debate on ethics and modern technology.",
              event_type: "extra_curricular",
              date: new Date("2025-04-02"),
              start_date_time: new Date("2025-04-02T18:00:00"),
              end_date_time: new Date("2025-04-02T20:00:00"),
              location: "Humanities Hall",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "completed",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Volunteer Info Session: Habitat for Humanity",
              description:
                "Learn how you can contribute to local homebuilding efforts.",
              event_type: "volunteer",
              date: new Date("2025-04-03"),
              start_date_time: new Date("2025-04-03T11:00:00"),
              end_date_time: new Date("2025-04-03T12:00:00"),
              location: "Student Center 203",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "completed",
              point_value: 9,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Study Jam: Exam Prep",
              description:
                "Collaborative study session for midterms with snacks and tutors.",
              event_type: "academic",
              date: new Date("2025-04-03"),
              start_date_time: new Date("2025-04-03T17:00:00"),
              end_date_time: new Date("2025-04-03T19:00:00"),
              location: "Main Library",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "completed",
              point_value: 8,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Art Club Gallery Walk",
              description: "Explore student art and support campus creatives.",
              event_type: "club",
              date: new Date("2025-04-04"),
              start_date_time: new Date("2025-04-04T13:00:00"),
              end_date_time: new Date("2025-04-04T15:00:00"),
              location: "Art Center Lobby",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "completed",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Earth Science Lecture: Oceans & Climate",
              description:
                "Join a guest speaker to learn about the role of oceans in global climate change.",
              event_type: "academic",
              date: new Date("2025-04-04"),
              start_date_time: new Date("2025-04-04T10:00:00"),
              end_date_time: new Date("2025-04-04T11:30:00"),
              location: "Science Auditorium",
              attendance_type: "online",
              registration: "handshake",
              custom: false,
              status: "completed",
              point_value: 11,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // Upcoming events (April 7 - April 9)
            {
              name: "Coding for Social Good Hackathon",
              description:
                "Create solutions for nonprofits in this 24-hour coding sprint.",
              event_type: "extra_curricular",
              date: new Date("2025-04-07"),
              start_date_time: new Date("2025-04-07T09:00:00"),
              end_date_time: new Date("2025-04-08T09:00:00"),
              location: "Innovation Lab",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 15,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Community Garden Work Day",
              description:
                "Help plant and maintain the university community garden.",
              event_type: "volunteer",
              date: new Date("2025-04-08"),
              start_date_time: new Date("2025-04-08T08:00:00"),
              end_date_time: new Date("2025-04-08T11:00:00"),
              location: "Community Garden",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 10,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Writing Center Workshop: Research Papers",
              description:
                "Improve your academic writing skills with targeted feedback.",
              event_type: "academic",
              date: new Date("2025-04-08"),
              start_date_time: new Date("2025-04-08T15:00:00"),
              end_date_time: new Date("2025-04-08T16:30:00"),
              location: "Writing Center",
              attendance_type: "online",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 9,
              verificationId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Language Exchange Club: Spring Kickoff",
              description:
                "Practice language skills and meet international students.",
              event_type: "club",
              date: new Date("2025-04-09"),
              start_date_time: new Date("2025-04-09T17:30:00"),
              end_date_time: new Date("2025-04-09T19:00:00"),
              location: "Global Lounge",
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
              name: "Public Speaking Practice Circle",
              description:
                "Practice your public speaking in a safe, supportive environment.",
              event_type: "extra_curricular",
              date: new Date("2025-04-09"),
              start_date_time: new Date("2025-04-09T11:00:00"),
              end_date_time: new Date("2025-04-09T12:30:00"),
              location: "Communication Building 202",
              attendance_type: "in_person",
              registration: "in_app",
              custom: false,
              status: "scheduled",
              point_value: 8,
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
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 12,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 13,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 14,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 15,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 16,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 17,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 18,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 19,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 20,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate experienceTypeCliftonStrength
          await queryInterface.bulkInsert("experienceTypeCliftonStrengths", [
            {
              experienceTypeId: 1,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 2,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 3,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 4,
              cliftonStrengthId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 5,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 6,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 7,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 8,
              cliftonStrengthId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 9,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 10,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 11,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 12,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 13,
              cliftonStrengthId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 14,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 15,
              cliftonStrengthId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 16,
              cliftonStrengthId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              experienceTypeId: 17,
              cliftonStrengthId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Clifton Strength
              experienceTypeId: 18,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Clifton Strength
              experienceTypeId: 19,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Clifton Strength
              experienceTypeId: 20,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
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
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-02-10"),
              studentId: 2,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-12-05"),
              studentId: 3,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-03-20"),
              studentId: 4,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-11-30"),
              studentId: 5,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-01-25"),
              studentId: 6,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-02-15"),
              studentId: 7,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-10-20"),
              studentId: 8,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2024-04-05"),
              studentId: 9,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-09-15"),
              studentId: 10,
              badgeId: 1,
              points_earned: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              date_acquired: new Date("2023-11-30"),
              studentId: 5,
              badgeId: 1,
              points_earned: 100,
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

          // Populate studentFlightPlanExperienceType
          await queryInterface.bulkInsert("studentFlightPlanExperienceTypes", [
            {
              studentFlightPlanId: 1,
              experienceTypeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 1,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 2,
              experienceTypeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 2,
              experienceTypeId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 3,
              experienceTypeId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 3,
              experienceTypeId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 4,
              experienceTypeId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 4,
              experienceTypeId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 5,
              experienceTypeId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentFlightPlanId: 5,
              experienceTypeId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 11,
              studentFlightPlanId: 11,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              id: 12,
              studentFlightPlanId: 12,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              id: 13,
              studentFlightPlanId: 13,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              id: 14,
              studentFlightPlanId: 14,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              id: 15,
              studentFlightPlanId: 15,
              experienceTypeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate studentCliftonStrengths
          await queryInterface.bulkInsert("studentCliftonStrengths", [
            {
              studentId: 1,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              cliftonStrengthId: 22,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              cliftonStrengthId: 30,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              cliftonStrengthId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              cliftonStrengthId: 1,
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
              studentId: 3,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              cliftonStrengthId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              cliftonStrengthId: 29,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              cliftonStrengthId: 4,
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
              studentId: 4,
              cliftonStrengthId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              cliftonStrengthId: 21,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              cliftonStrengthId: 32,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 26,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              cliftonStrengthId: 34,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              cliftonStrengthId: 18,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              cliftonStrengthId: 24,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              cliftonStrengthId: 30,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              cliftonStrengthId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              cliftonStrengthId: 23,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              cliftonStrengthId: 31,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              cliftonStrengthId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              cliftonStrengthId: 22,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              cliftonStrengthId: 28,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              cliftonStrengthId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              cliftonStrengthId: 27,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              cliftonStrengthId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              cliftonStrengthId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              cliftonStrengthId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              cliftonStrengthId: 34,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate task
          await queryInterface.bulkInsert("tasks", [
            {
              category: "academic",
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
              schedule_type: "one_time",
              name: "Leadership Seminar",
              description: "Attend a leadership seminar.",
              rationale: "Develop leadership skills.",
              semester_from_grad: 2,
              point_value: 50,
              taskId: null,
              verificationId: 1,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              schedule_type: "special_event",
              name: "Networking Event",
              description: "Attend a professional networking event.",
              rationale: "Expand professional network.",
              semester_from_grad: 1,
              point_value: 75,
              taskId: null,
              verificationId: 1,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
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
              category: "career_prep",
              schedule_type: "special_event",
              name: "Career Fair Prep Session",
              description:
                "Attend a preparation session for an upcoming career fair.",
              rationale:
                "Build confidence and polish communication skills for recruiters.",
              semester_from_grad: 3,
              point_value: 110,
              taskId: 1,
              verificationId: 10,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "mentoring",
              schedule_type: "semesterly",
              name: "Peer Mentoring Session",
              description:
                "Join a peer mentoring group for academic and career support.",
              rationale: "Support others and learn collaboratively.",
              semester_from_grad: 3,
              point_value: 100,
              taskId: null,
              verificationId: 1,
              video_link: "http://example.com/peer-mentoring",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "volunteer",
              schedule_type: "one_time",
              name: "Campus Clean-Up Day",
              description:
                "Participate in an organized effort to clean the campus.",
              rationale: "Foster community spirit and campus pride.",
              semester_from_grad: 2,
              point_value: 50,
              taskId: null,
              verificationId: 1,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              schedule_type: "special_event",
              name: "Alumni Mixer",
              description: "Engage with alumni from your department or major.",
              rationale:
                "Build professional relationships with experienced graduates.",
              semester_from_grad: 1,
              point_value: 75,
              taskId: null,
              verificationId: 1,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "strengths",
              schedule_type: "semesterly",
              name: "Personal Values Workshop",
              description:
                "Attend a workshop focused on identifying core personal values.",
              rationale: "Clarify personal motivations for long-term goals.",
              semester_from_grad: 1,
              point_value: 60,
              taskId: null,
              verificationId: 4,
              video_link: "http://example.com/values-workshop",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              schedule_type: "one_time",
              name: "Capstone Planning Session",
              description:
                "Meet with an advisor to outline your senior capstone project.",
              rationale:
                "Ensure you're on track for graduation with a solid project plan.",
              semester_from_grad: 2,
              point_value: 80,
              taskId: null,
              verificationId: 5,
              video_link: "https://youtu.be/capstone-plan",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "other",
              schedule_type: "semesterly",
              name: "Creative Project Showcase",
              description:
                "Present a personal or class project to peers or faculty.",
              rationale: "Develop presentation and storytelling skills.",
              semester_from_grad: 3,
              point_value: 90,
              taskId: null,
              verificationId: 6,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "academic",
              schedule_type: "semesterly",
              name: "STEM Outreach Volunteering",
              description:
                "Volunteer to teach coding to local middle school students.",
              rationale:
                "Reinforce your knowledge while inspiring future students.",
              semester_from_grad: 4,
              point_value: 100,
              taskId: null,
              verificationId: 7,
              video_link: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "leadership",
              schedule_type: "special_event",
              name: "Group Facilitation Training",
              description:
                "Participate in a training to lead peer discussion groups.",
              rationale:
                "Gain confidence in leading and managing group dynamics.",
              semester_from_grad: 1,
              point_value: 120,
              taskId: null,
              verificationId: 8,
              video_link: "http://example.com/group-training",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              category: "networking",
              schedule_type: "semesterly",
              name: "LinkedIn Profile Review",
              description:
                "Have your LinkedIn profile reviewed by a career advisor.",
              rationale: "Ensure your online presence reflects your goals.",
              semester_from_grad: 2,
              point_value: 150,
              taskId: null,
              verificationId: 9,
              video_link: "http://example.com/linkedin-review",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
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
              fName: "Arrian Naomi",
              lName: "Taton",
              email: "arriannaomi.a.taton@eagles.oc.edu",
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

          // Populate eventCliftonStrengths
          await queryInterface.bulkInsert("eventCliftonStrengths", [
            {
              eventId: 1,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 1,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 1,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              cliftonStrengthId: 19,
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
              eventId: 4,
              cliftonStrengthId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 4,
              cliftonStrengthId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              cliftonStrengthId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              cliftonStrengthId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              cliftonStrengthId: 26,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              cliftonStrengthId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              cliftonStrengthId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              cliftonStrengthId: 18,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              cliftonStrengthId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              cliftonStrengthId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              cliftonStrengthId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              cliftonStrengthId: 23,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              cliftonStrengthId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              cliftonStrengthId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              cliftonStrengthId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              cliftonStrengthId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              cliftonStrengthId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              cliftonStrengthId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              cliftonStrengthId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              cliftonStrengthId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              cliftonStrengthId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              cliftonStrengthId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);

          // Populate eventMajors
          await queryInterface.bulkInsert("eventMajors", [
            {
              eventId: 1,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 1,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 1,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 2,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 3,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 4,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 4,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 4,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 5,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 6,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 7,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 8,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 9,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 10,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 11,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 11,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 11,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 12,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 12,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 12,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 13,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 13,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 13,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 14,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 14,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 14,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 15,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 15,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 15,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 16,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 16,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 16,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 17,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 17,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 17,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 18,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 18,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 18,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 19,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 19,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 19,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 20,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 20,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 20,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 21,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 21,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 21,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 22,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 22,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 22,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 23,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 23,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 23,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 24,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 24,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 24,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 25,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 25,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 25,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 26,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 26,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 26,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 27,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 27,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 27,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 28,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 28,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 28,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 29,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 29,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 29,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 30,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 30,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 30,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 31,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 31,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 31,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 32,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 32,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 32,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 33,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 33,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 33,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 34,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 34,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 34,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 35,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 35,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 35,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 36,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 36,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 36,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 37,
              majorId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 37,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 37,
              majorId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 38,
              majorId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 38,
              majorId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 38,
              majorId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 39,
              majorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 39,
              majorId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 39,
              majorId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 40,
              majorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 40,
              majorId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              eventId: 40,
              majorId: 8,
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

          // Populate studentFlightPlanExperienceTypeEvents
          await queryInterface.bulkInsert("studentFlightPlanExperienceTypeEvents", [
            {
              studentFlightPlanExperienceTypeId: 1,
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
              studentFlightPlanExperienceTypeId: 2,
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
              studentFlightPlanExperienceTypeId: 3,
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
              studentFlightPlanExperienceTypeId: 4,
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
              studentFlightPlanExperienceTypeId: 5,
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
              studentFlightPlanExperienceTypeId: 1,
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
              studentFlightPlanExperienceTypeId: 2,
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
              studentFlightPlanExperienceTypeId: 3,
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
              studentFlightPlanExperienceTypeId: 4,
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
              studentFlightPlanExperienceTypeId: 5,
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
            {
              studentFlightPlanExperienceTypeId: 11,
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
              studentFlightPlanExperienceTypeId: 12,
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
              studentFlightPlanExperienceTypeId: 13,
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
              studentFlightPlanExperienceTypeId: 14,
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
              studentFlightPlanExperienceTypeId: 15,
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
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //4
            {
              studentId: 2,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //5
            {
              studentId: 3,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //6
            {
              studentId: 4,
              flightPlanId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            }, //7
            {
              studentId: 5,
              flightPlanId: 2,
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
            // student flight plans for students 1-5, for semesters 1, 3, flight plans 11-20
            {
              id: 11,
              studentId: 1,
              flightPlanId: 1,
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 12,
              studentId: 2,
              flightPlanId: 1,
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 13,
              studentId: 3,
              flightPlanId: 1,
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 14,
              studentId: 4,
              flightPlanId: 1,
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 15,
              studentId: 5,
              flightPlanId: 1,
              semester_from_grad: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 16,
              studentId: 1,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 17,
              studentId: 2,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 18,
              studentId: 3,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 19,
              studentId: 4,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 20,
              studentId: 5,
              flightPlanId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
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
            // Perfecitonist Badge
            { taskId: 1, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 2, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 3, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 4, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 5, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 6, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 7, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 8, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 9, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 10, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 11, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 12, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 13, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 14, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 15, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 16, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 17, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 18, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 19, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },
            { taskId: 20, badgeId: 7, createdAt: new Date(), updatedAt: new Date() },

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
            {
              // Testing 'All' Clifton Strength
              taskId: 18,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Clifton Strength
              taskId: 19,
              cliftonStrengthId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Clifton Strength
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
            {
              // Testing 'All' Major
              taskId: 18,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Major
              taskId: 19,
              majorId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              // Testing 'All' Major
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
            // student flight plan tasks for students 1-5, for semesters 1, 3, flight plans 11-20
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 11,
              taskId: 1,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 11,
              taskId: 2,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 11,
              taskId: 3,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 11,
              taskId: 4,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 11,
              taskId: 5,
            }, {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 12,
              taskId: 1,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 12,
              taskId: 2,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 12,
              taskId: 3,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 12,
              taskId: 4,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 12,
              taskId: 5,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 13,
              taskId: 1,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 13,
              taskId: 2,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 13,
              taskId: 3,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 13,
              taskId: 4,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 13,
              taskId: 5,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 14,
              taskId: 1,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 14,
              taskId: 2,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 14,
              taskId: 3,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 14,
              taskId: 4,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 14,
              taskId: 5,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 15,
              taskId: 1,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 15,
              taskId: 2,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 15,
              taskId: 3,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 15,
              taskId: 4,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 15,
              taskId: 5,
            },
            {
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 16,
              taskId: 6,
            },
            {
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 16,
              taskId: 7,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 16,
              taskId: 8,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 16,
              taskId: 9,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 16,
              taskId: 10,
            },
            {
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 17,
              taskId: 6,
            },
            {
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 17,
              taskId: 7,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 17,
              taskId: 8,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 17,
              taskId: 9,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 17,
              taskId: 10,
            },
            {
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 18,
              taskId: 6,
            },
            {
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 18,
              taskId: 7,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 18,
              taskId: 8,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 18,
              taskId: 9,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 18,
              taskId: 10,
            },
            {
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 19,
              taskId: 6,
            },
            {
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 19,
              taskId: 7,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 19,
              taskId: 8,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 19,
              taskId: 9,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 19,
              taskId: 10,
            },
            {
              status: "ready_for_review",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 20,
              taskId: 6,
            },
            {
              status: "unapproved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 20,
              taskId: 7,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 20,
              taskId: 8,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 20,
              taskId: 9,
            },
            {
              status: "approved",
              createdAt: new Date(),
              updatedAt: new Date(),
              studentFlightPlanId: 20,
              taskId: 10,
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

          await queryInterface.bulkInsert("studentEvents", [
            // 3 students interested in event 1
            {
              studentId: 1,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 2
            {
              studentId: 1,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 3
            {
              studentId: 5,
              eventId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 4
            {
              studentId: 7,
              eventId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 5
            {
              studentId: 1,
              eventId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 5,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 6
            {
              studentId: 3,
              eventId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 6,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 7
            {
              studentId: 7,
              eventId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 7,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 8
            {
              studentId: 1,
              eventId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 8,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 9
            {
              studentId: 3,
              eventId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 9,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 10
            {
              studentId: 7,
              eventId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 10,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 11
            {
              studentId: 1,
              eventId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 11,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 12
            {
              studentId: 3,
              eventId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 12,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 13
            {
              studentId: 7,
              eventId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 13,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 14
            {
              studentId: 1,
              eventId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 14,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 15
            {
              studentId: 3,
              eventId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 15,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 16
            {
              studentId: 6,
              eventId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              eventId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 17
            {
              studentId: 1,
              eventId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 17,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 18
            {
              studentId: 4,
              eventId: 18,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 18,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 19
            {
              studentId: 6,
              eventId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              eventId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 19,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 20
            {
              studentId: 9,
              eventId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              eventId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              eventId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              eventId: 21,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 21,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 21,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 22
            {
              studentId: 4,
              eventId: 22,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 22,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 23
            {
              studentId: 6,
              eventId: 23,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              eventId: 23,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 23,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 24
            {
              studentId: 9,
              eventId: 24,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              eventId: 24,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 25
            {
              studentId: 1,
              eventId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 25,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 26
            {
              studentId: 4,
              eventId: 26,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 26,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 27
            {
              studentId: 6,
              eventId: 27,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              eventId: 27,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 27,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 28
            {
              studentId: 9,
              eventId: 28,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              eventId: 28,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              eventId: 28,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 28,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 29
            {
              studentId: 3,
              eventId: 29,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 29,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 29,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 30
            {
              studentId: 6,
              eventId: 30,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 7,
              eventId: 30,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 31
            {
              studentId: 8,
              eventId: 31,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 31,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 10,
              eventId: 31,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 32
            {
              studentId: 1,
              eventId: 32,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 32,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 33
            {
              studentId: 3,
              eventId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 33,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 34
            {
              studentId: 7,
              eventId: 34,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 34,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 34,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 35
            {
              studentId: 10,
              eventId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              eventId: 35,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 36
            {
              studentId: 2,
              eventId: 36,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 36,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 4,
              eventId: 36,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 2 students interested in event 37
            {
              studentId: 5,
              eventId: 37,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 37,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 38
            {
              studentId: 7,
              eventId: 38,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 8,
              eventId: 38,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 9,
              eventId: 38,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 4 students interested in event 39
            {
              studentId: 10,
              eventId: 39,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 1,
              eventId: 39,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 2,
              eventId: 39,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 3,
              eventId: 39,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            // 3 students interested in event 40
            {
              studentId: 4,
              eventId: 40,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 5,
              eventId: 40,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              studentId: 6,
              eventId: 40,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
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
        await queryInterface.bulkDelete("studentFlightPlanExperienceTypes", null, {
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
        await queryInterface.bulkDelete("eventMajors", null, {
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
        await queryInterface.bulkDelete("studentFlightPlanExperienceTypeEvents", null, {
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
        await queryInterface.bulkDelete("studentFlightPlanTasks", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("userRolePermissions", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
        await queryInterface.bulkDelete("studentEvents", null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        });
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
