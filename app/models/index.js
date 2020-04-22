const Sequelize = require("sequelize");

const sequelize = new Sequelize('MovieDB', 'root', 'jakub123', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.movies = require("./movie.model.js")(sequelize, Sequelize);
db.tvshows = require("./tvshows.model.js")(sequelize, Sequelize)
db.person = require("./person.model.js")(sequelize, Sequelize);

module.exports = db;