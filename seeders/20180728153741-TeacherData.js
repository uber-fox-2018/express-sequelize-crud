"use strict";

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
    return queryInterface.bulkInsert("Teachers", [
      {
        first_name: "khodhi",
        last_name: "robbani",
        email: "khodhirobbani@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "alex",
        last_name: "momo",
        email: "alexmomo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "harles",
        last_name: "nunu",
        email: "harlesnunu@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "monkey",
        last_name: "king",
        email: "monkeyrobbani@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Teachers", [
      {
        first_name: "khodhi",
        last_name: "robbani",
        email: "khodhirobbani@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "alex",
        last_name: "momo",
        email: "alexmomo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "harles",
        last_name: "nunu",
        email: "harlesnunu@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "monkey",
        last_name: "king",
        email: "monkeyrobbani@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  }
};
