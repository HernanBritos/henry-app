const {
   createPost, 
   getPost, 
   editPost, 
   deletePost,
   getCohortePosts, 
   getUserPosts,
   getGroupPosts,
} = require("./resolvers/postResolver");
const {
   mateReview,
   createReview,
   updateReview,
   deleteReview,
} = require("./resolvers/mateReviewResolver");
const {
   matesScore,
   deleteMatesScore,
   updateMatesScore,
   createMatesScore,
} = require("./resolvers/mateScoreResolver");
const {
   cohortesQuery,
   cohorteResolver,
} = require("./resolvers/cohorteResolver");
const { userMutations, userQuerys } = require("./resolvers/userResolver");
const {
   checkPoints,
   updateCheckPoint,
   deleteCheckPoint,
   createCheckPoint,
} = require("./resolvers/checkPointResolver");
const { contents } = require("./resolvers/contentResolver");
const {
   modules,
   createModule,
   updateModule,
   deleteModule,
} = require("./resolvers/moduleResolver");
const {
   roles,
   deleteRole,
   updateRole,
   createRole,
} = require("./resolvers/roleResolver");
const {
   scores,
   deleteScore,
   updateScore,
   createScore,
} = require("./resolvers/scoreResolver");

const { groupQuerys, groupResolver } = require("./resolvers/groupResolver");

const { getUserById } = require("../controllers/userController");
const {
   getStudentOfGrups,
   getStaffOfGrups,
   getPmsOfGrups,
   getInstructorOfGrups,
} = require("../controllers/groupController");

const { lessons } = require("./resolvers/lessonsResolver");

const resolvers = {
   Query: {
      checkPoints,
      ...cohortesQuery,
      contents,
      modules,
      roles,
      scores,
      matesScore,
      mateReview,
      getPost,
      getCohortePosts,
      getUserPosts,
      getGroupPosts,
      ...groupQuerys,
      ...userQuerys,
   },

   Mutation: {
      //Mutations for Cohortes
      ...cohorteResolver,
      // Mutations for Users
      ...userMutations,
      // Mutations for CheckPoints
      createCheckPoint,
      updateCheckPoint,
      deleteCheckPoint,
      // Mutations fot Modules
      createModule,
      updateModule,
      deleteModule,
      // Mutations for Roles,
      createRole,
      updateRole,
      deleteRole,
      // Mutaciones de Scores
      createScore,
      updateScore,
      deleteScore,
      // Mutaciones para groups
      ...groupResolver,
      //mutations para mateScores
      deleteMatesScore,
      updateMatesScore,
      createMatesScore,
      //mutations para reviews
      createReview,
      updateReview,
      deleteReview,
      //mutation para posts
      createPost,
      editPost,
      deletePost,

   },

   Cohorte: {
      instructor: async ({ instructor }) => {
         return await getUserById(instructor);
      },
   },

   Group: {
      instructor: async ({ id }) => {
         return await getInstructorOfGrups(id);
      },

      pms: async ({ id }) => {
         return await getPmsOfGrups(id);
      },

      staff: async ({ id }) => {
         return await getStaffOfGrups(id);
      },

      students: async ({ id }) => {
         return await getStudentOfGrups(id);
      },
   },
};

module.exports = resolvers;
