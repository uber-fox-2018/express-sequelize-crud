'use strict';

const fs = require(`fs`)

module.exports = {
  up: (queryInterface, Sequelize) => {
    const rawData = fs.readFileSync(`./teacher.json`, `utf8`)
    const file = JSON.parse(rawData)
    const result = []

    for (let i =0 ; i < file.length; i++) {
      let obj = {
        firstName:file[i].firstName,
        lastName:file[i].lastName,
        email:file[i].email,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(obj)
    }
    return queryInterface.bulkInsert('Teachers', result, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', result, {});
  }
};


    