const mongoose = require("mongoose");

mongoose.set("strict", false);

const lunchSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  collageOne: String,
  collageTwo: String,
  collageThree: String,
});

const breakfastSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  collageOne: String,
  collageTwo: String,
  collageThree: String,
});

const dinnerSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  collageOne: String,
  collageTwo: String,
  collageThree: String,
});

const Dinner = mongoose.model("Dinner", dinnerSchema);
const Lunch = mongoose.model("Lunch", lunchSchema);
const Breakfast = mongoose.model("Breakfast", breakfastSchema);

module.exports = {
  Dinner,
  Breakfast,
  Lunch,
};
