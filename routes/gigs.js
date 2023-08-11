const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/gig");

router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.status(200);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
