// CREATING A ROUTER
const router = require("express").Router();

// IMPORTING OUR EXERCISE MODEL
const Exercise = require("../models/exercise.model.js");

// LISTING ALL OUR EXERCISES WHENEVER WE HIT THE /exercices/ ROUTE
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error! " + err));
});

// ADD AN EXERCISE INTO OUR DATABASE WHENEVER WE HIT THE /exercices/add ROUTE
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// LIST AN EXERCISE BY IT'S ID
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error : " + err));
});

// DELETE AN EXERCISE BY IT'S ID
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id).then(() =>
    res
      .json("Exercise deleted")
      .catch((err) => res.status(400).json("Error :" + err))
  );
});

// UPDATE AN EXERCISE BY IT'S ID
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise Updated!"))
        .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => {
      res.status(400).json("Error :" + err);
    });
});

// EXPORT OUR ROUTER
module.exports = router;
