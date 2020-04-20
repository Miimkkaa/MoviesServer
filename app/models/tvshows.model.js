module.exports = (sequelize, Sequelize) => {
    const TvShow = sequelize.define("tvshows", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      }
    });
  
    return TvShow;
  };