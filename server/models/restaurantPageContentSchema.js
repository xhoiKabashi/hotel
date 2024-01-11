const mongoose = require("mongoose");

mongoose.set("strict", false);

const restaurantPageContentSchema = new mongoose.Schema({
  breakfast: {
    title: String,
    description: String,
    image: String,
    collageOne: String,
    collageTwo: String,
    collageThree: String,
  },
  lunch: {
    title: String,
    description: String,
    image: String,
    collageOne: String,
    collageTwo: String,
    collageThree: String,
  },
  dinner: {
    title: String,
    description: String,
    image: String,
    collageOne: String,
    collageTwo: String,
    collageThree: String,
  },
});

module.exports = mongoose.model(
  "RestaurantPageContent",
  restaurantPageContentSchema
);
