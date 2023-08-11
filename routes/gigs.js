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
  let { name, technologies, budget, description, contact_email } = req.body;

  // Validations
  let errors = [];

  if (!name) {
    errors.push({ msg: `Please add a title` });
  }
  if (!technologies) {
    errors.push({ msg: `Please add some technologies` });
  }
  if (!description) {
    errors.push({ msg: `Please add a description` });
  }

  // Send error response
  if (errors.length !== 0) {
    return res.status(400).json({
      statusCode: 400,
      errors,
    });
  }

  if (!budget) {
    budget = "Unknown";
  } else {
    budget = `$${budget}`;
  }

  // Make technologies lowercase and remove space after coma
  technologies = technologies.toLowerCase().replace(/, /g, ",");

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
