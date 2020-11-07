// IMPORTING OUR MONGOOSE LIBRARY
const mongoose = require("mongoose");

// ASSIGNING OUR CONSTRUCTOR
const Schema = mongoose.Schema;

// INSTANCIATING OUR USER SCHEMA
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

// CREATING OUR MODEL
const User = mongoose.model("User", userSchema);

// EXPORTING OUR MODEL
module.exports = User;
