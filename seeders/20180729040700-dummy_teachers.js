'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
        first_name: 'harles',
        last_name: 'bayu',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'harles@gmail.com'},
      {
        first_name: 'giri',
        last_name: 'anggara',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'giri@gmail.com'
      },
      {
        first_name: 'sinta',
        last_name: 'novianka',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sinta@gmail.com'
      },
      {
        first_name: 'karina',
        last_name: 'meitap',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'karina@gmail.com'
      },
      {
        first_name: 'mediana',
        last_name: 'andini',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'mediana@gmail.com'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
