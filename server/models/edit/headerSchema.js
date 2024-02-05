const mongoose = require("mongoose");

mongoose.set("strict", false);

const hotelSchema = new mongoose.Schema({
  h1Text: String,
  h2Text: String,
  h3Text: String,
  headerImage: String,
});

const homeHeader = mongoose.model("HomeHeaderSchema", hotelSchema);
const aboutHeader = mongoose.model("AboutHeaderSchema", hotelSchema);
const restaurantHeaderSc = mongoose.model(
  "RestaurantHeaderSchema",
  hotelSchema
);

module.exports = {
  homeHeader,
  aboutHeader,
  restaurantHeaderSc,
};
