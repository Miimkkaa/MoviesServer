module.exports = (sequelize, Sequelize) => {

    const Favorites = sequelize.define("favorites", {
  
      userid: {
  
        type: Sequelize.STRING
  
      },
  
      movieid: {
  
        type: Sequelize.STRING
  
      },
  
      tvshowid: {
  
        type: Sequelize.STRING
  
      }
  
    });
  
  
  
    return Favorites;
  
  };