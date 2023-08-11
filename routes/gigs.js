const express = require("express");
const router = express.Router();
const Gig = require("../models/gig");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get All Gigs
router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      res.status(200).json({
        statusCode: 200,
        data: gigs,
      });
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
  if (!contact_email) {
    errors.push({ msg: `Please add a contact email` });
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
    .then((gig) =>
      res.status(201).json({
        statusCode: 201,
        data: gig,
      })
    )
    .catch((err) => console.log(err));
});

// Search for gigs
router.get("/search", (req, res) => {
  const { term } = req.query;

  Gig.findAll({
    where: {
      technologies: { [Op.like]: "%" + term + "%" },
    },
  })
    .then((gigs) => {
      res.status(200).json({
        statusCode: 200,
        data: gigs,
      });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
