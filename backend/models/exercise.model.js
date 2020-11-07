// IMPORTING OUR MONGOOSE LIBRARY
const mongoose = require("mongoose");

// ASSIGNING OUR CONSTRUCTOR
const Schema = mongoose.Schema;

// INSTANCIATING OUR EXERCISE SCHEMA
const exerciceSchema = new Schema(
  {
    username: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// CREATING OUR MODEL
const Exercise = mongoose.model("Exercise", exerciceSchema);

// EXPORTING OUR MODEL
module.exports = Exercise;
