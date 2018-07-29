'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrSubjects = [];
    ['Kimia', 'Ekonomi'].forEach(index => {
      arrSubjects.push({
        subject_name: index,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });
    return queryInterface.bulkInsert('Subjects', arrSubjects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};