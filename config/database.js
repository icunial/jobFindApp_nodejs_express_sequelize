// Sequelize connection
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:telefe14@localhost:5432/jobs_db");

module.exports = db;
