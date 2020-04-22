module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define('person', {
      fullname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return Person;
  };