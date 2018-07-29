'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    createdAt : new Date(),
    updatedAt: new Date()
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};