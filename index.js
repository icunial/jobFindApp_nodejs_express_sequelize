const express = require("express");
const app = express();

require("dotenv").config();

// Sequelize connection
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:telefe14@localhost:5432/jobs_db");

// Test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Job Find App");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
