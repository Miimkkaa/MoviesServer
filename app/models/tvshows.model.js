module.exports = (sequelize, Sequelize) => {
    const TvShows = sequelize.define("tvshows", {
    TvShowId: {
        type: Sequelize.INTEGER
      },
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
      }
    });
  
    return TvShows;
  };