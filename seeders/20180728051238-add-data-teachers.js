'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [
      {
        first_name: 'Bambang',
        last_name: 'Suprapto',
        email: 'bambangsuprapto@gmail.com',
        birthday: '1993-07-10'
      },
      {
        first_name: 'Rukmana',
        last_name: 'Fatmawati',
        email: 'rukmanafatmawati@gmail.com',
        birthday: '1993-06-03'
      },
      {
        first_name: 'Butet',
        last_name: 'Naiborhu',
        email: 'butetnaiborhu@gmail.com',
        birthday: '1992-09-09'
      },
      {
        first_name: 'Yulius',
        last_name: 'Prawiranegara',
        email: 'yuliusprawiranegara@gmail.com',
        birthday: '1994-11-11'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};
