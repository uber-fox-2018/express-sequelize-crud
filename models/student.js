'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Checks your email format (foo@bar.com)'
        },
        isUnique: function(email, callback) {
          Student.findOne({ where: { email: email } })
          .then(function(valid) {
            if (valid) {
              callback('Email is already registered');
            } else {
              callback(false);
            }
          });
        }
      }
    }
    
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};