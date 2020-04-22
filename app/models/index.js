const Sequelize = require("sequelize");
const sequelize = new Sequelize('movieDB', 'root', 'e@syLook71', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.movies = require("./movie.model.js")(sequelize, Sequelize);

module.exports = db;