module.exports = (sequelize, Sequelize) => {
  const TvShow = sequelize.define("tvshows", {
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

  return TvShow;
};