'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Subjects', [{
     subject_name: "Chemistry"
   }, {
     subject_name: "Economics"
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
