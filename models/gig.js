const Sequelize = require("sequelize");
const db = require("../config/database");
const { DataTypes } = require("sequelize");

const Gig = db.define(
  "gig",
  {
    name: {
      type: DataTypes.STRING,
    },
    technologies: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    budget: {
      type: DataTypes.STRING,
    },
    contact_email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Gig;
