'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
        subject_name: 'Kimia'
      },
      {
        subject_name: 'Biologi'
      },
      {
        subject_name: 'Fisika'
      },
      {
        subject_name: 'Matematika'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
