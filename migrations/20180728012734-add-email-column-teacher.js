'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Teachers', 'email', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('Teachers', 'email');
  }
};