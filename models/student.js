'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
        type: DataTypes.STRING,
        validate:{
          is: {
            args:/^\w+@[a-z]+\.[a-z]{3}$/,
            msg: "The email format is wrong"
          },
          isUnique: (email, next) => {
            Student.find({
                where:{email:email},
                attributes:["id"]
            })
                .done((error, user)=>{
                  if(error)
                    return next("Email address already in use");
                  if(user)
                    return next("Email address already in use!");
                  next();
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