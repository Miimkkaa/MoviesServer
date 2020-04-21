const Sequelize = require("sequelize");
const sequelize = new Sequelize('moviedb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.favorites = require("./favorites.model.js")(sequelize, Sequelize);

module.exports = db;