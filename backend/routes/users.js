// CREATING A ROUTER
const router = require("express").Router();

// IMPORTING OUR USER MODEL
const User = require("../models/user.model.js");

// LISTING OUR USER DOCUMENTS IN USER MODEL WHENEVER WE HIT THE /users/ ROUTE
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error! " + err));
});

// ADD A USER INTO OUR DATABASE WHENEVER WE HIT THE /users/add ROUTE
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  
  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// EXPORT OUR ROUTER
module.exports = router;
