const express = require("express");
const app = express();

const db = require("./config/database");

require("dotenv").config();

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
