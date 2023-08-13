require("dotenv").config();

// Sequelize connection
const Sequelize = require("sequelize");
const db = new Sequelize(
  `postgres://${process.env.USERNAME_DB}:${process.env.PASSWORD}@${process.env.HOSTNAME}:${process.env.PORT_DB}/${process.env.DATABASE}`
);

module.exports = db;
