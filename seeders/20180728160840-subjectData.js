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
    return queryInterface.bulkInsert("Subjects", [
      {
        subject_name: "khodhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: "alex",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: "harles",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: "monkey",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDeletee("Teachers", [
    {
      subject_name: "khodhi",
      last_name: "robbani",
      email: "khodhirobbani@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: "alex",
      last_name: "momo",
      email: "alexmomo@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: "harles",
      last_name: "nunu",
      email: "harlesnunu@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: "monkey",
      last_name: "king",
      email: "monkeyrobbani@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  }
};
