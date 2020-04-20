const Sequelize = require("sequelize");
const sequelize = new Sequelize('MovieDB', 'root', 'jakub123', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.MovieDB = require("./tvshows.model.js")(sequelize, Sequelize)

module.exports = db;