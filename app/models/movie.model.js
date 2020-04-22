module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
      Title: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },          
      URL: {
        type: Sequelize.STRING
      },          
      Genre: {
        type: Sequelize.STRING
      },
      Picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  
    return Movie;
  };