'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   const fs = require('fs');
   const arrTeacher = [];
   const teachersData = fs.readFileSync('./teachers.csv', 'utf8')
     .split('\n')
     .map(data => data.split(','))
     .slice(1)
     .forEach(teacher => {
       let objTeacher = {
         first_name: teacher[0],
         last_name: teacher[1],
         email: teacher[2], 
         createdAt: new Date(),
         updatedAt: new Date(),
       };
       arrTeacher.push(objTeacher);
     });
    return queryInterface.bulkInsert('Teachers', arrTeacher, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};