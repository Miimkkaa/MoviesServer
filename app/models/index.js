const Sequelize = require("sequelize");
const sequelize = new Sequelize('MovieDB', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.person = require("./person.model.js")(sequelize, Sequelize);


module.exports = db;