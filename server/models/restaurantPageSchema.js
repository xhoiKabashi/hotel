const mongoose = require("mongoose");

mongoose.set("strict", false);

const restaurantPageSchema = new mongoose.Schema({
  restaurantPageHeaderImg: String,
  levelOneTitle: String,
  levelTwoTitle: String,
  levelThreeTitle: String,
});

module.exports = mongoose.model("restaurantPageSchema", restaurantPageSchema);
