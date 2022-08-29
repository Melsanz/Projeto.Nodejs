'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Tasks',[{
     description:"Banana",
     done: false,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     description: "Uva",
     done: false,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     description: "Laranja",
     done: true,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     description: "Leite",
     done: true,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     description: "Queijo",
     done: true,
     createdAt: new Date(),
     updatedAt: new Date()
   },{
     description: "Iogurt",
     done: true,
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
