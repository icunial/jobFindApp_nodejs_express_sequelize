const express = require("express");
const router = express.Router();
const Gig = require("../models/gig");
const { DATE } = require("sequelize");

// Get All Gigs
router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.status(200);
    })
    .catch((error) => console.log(error));
});

// Add a gig
router.post("/add", (req, res) => {
  const { name, technologies, budget, description, contact_email } = req.body;

  // Validations
  let error = [];

  if (!name) {
    error.push({ msg: `Please add a title` });
  }
  if (!technologies) {
    error.push({ msg: `Please add some technologies` });
  }
  if (!description) {
    error.push({ msg: `Please add a description` });
  }
  if (!budget) {
    error.push({ msg: `Please add a budget` });
  }

  if (error.length !== 0) {
    return res.status(400).json({
      statusCode: 400,
      error,
    });
  }

  // Insert into table
  Gig.create({
    name,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => console.log(gig))
    .catch((err) => console.log(err));
});

module.exports = router;
