'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isUnique: function (value, next) {
          Student.findOne({ where: { email: value } })
            .then(input => {
              if (input !== null) {
                return next(`Email already exist`);
              } else {
                return next();
              }
            })
            .catch(err => {
              return next(err);
            })
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};