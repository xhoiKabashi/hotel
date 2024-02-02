const mongoose = require("mongoose");

mongoose.set("strict", false);

const menuSchema = new mongoose.Schema({
  title: String,
  description: String,
  position: Number,
});

const Dinner = mongoose.model("Dinner", menuSchema);
const Lunch = mongoose.model("Lunch", menuSchema);
const Breakfast = mongoose.model("Breakfast", menuSchema);

module.exports = {
  Dinner,
  Breakfast,
  Lunch,
};
