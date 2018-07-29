'use strict';
const fs = require(`fs`)
module.exports = {
  up: (queryInterface, Sequelize) => {
    let rawFile = fs.readFileSync(`/home/andryean/Documents/h8/p1/week3 end week/as/student.json`)
    let file = JSON.parse(rawFile)
    let data = []

    for (let i = 0; i < file.length; i++) {
      file[i].createdAt = new Date
      file[i].updatedAt = new Date
      data.push(file[i])
    }
    console.log(data);
    
    return queryInterface.bulkInsert('Students', data , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {})
  }
};
