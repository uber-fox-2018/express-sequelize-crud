'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email not valid'
        },
      }
    },
    birthday: DataTypes.DATE
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};