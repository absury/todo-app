const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  dialectOptions: dbConfig.dialectOptions,
  logging: false,
});

// Initialize models etc.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, DataTypes);

module.exports = db;
