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
router.get("/add", (req, res) => {
  const data = {
    name: "Title 2",
    technologies: "Tecnologies Title 2",
    budget: "$5000",
    description: "Description Title 2",
    contact_email: "title2@email.com",
  };

  let { name, technologies, budget, description, contact_email } = data;

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
