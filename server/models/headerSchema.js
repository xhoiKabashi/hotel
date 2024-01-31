const mongoose = require("mongoose");

mongoose.set("strict", false);

const hotelSchema = new mongoose.Schema({
  h1Text: String,
  h2Text: String,
  h3Text: String,
  headerImage: String,
});

const Header = mongoose.model("HeaderSchema", hotelSchema);

module.exports = {
  Header,
};
