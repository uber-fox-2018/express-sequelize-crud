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
      let dataGuru = [
        {
          first_name: 'Bambang',
          last_name: 'Suprapto',
          createdAt: new Date,
          updatedAt: new Date,
          email: 'bambangsuprato@sekolah.is'
        },
        {
          first_name: 'Rukmana',
          last_name: 'Fatmawati',
          createdAt: new Date,
          updatedAt: new Date,
          email: 'rukmanafatmawati@sekolah.is'
        },
        {
          first_name: 'Butet',
          last_name: 'Naiborhu',
          createdAt: new Date,
          updatedAt: new Date,
          email: 'butetnaiborhu@sekolah.is'
        },
        {
          first_name: 'Yulius',
          last_name: 'Prawiranegara',
          createdAt: new Date,
          updatedAt: new Date,
          email: 'yuliusprawiranegara@sekolah.is'
        },
      ]
      return queryInterface.bulkInsert('Teachers',dataGuru,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers',null,{})
  }
};
