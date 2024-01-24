const mongoose = require("mongoose");
const { transformObject } = require("../helpers/helpers");

mongoose.set("strict", false);

const hotelAboutUsHeaderSchema = new mongoose.Schema(
  {
    levelOneTitle: String,
    levelTwoTitle: String,
    levelThreeTitle: String,
    headerImage: String,
  },
  {
    toJSON: {
      transform: transformObject,
    },
  }
);

const hotelAboutUsContentSchema = new mongoose.Schema({
  title: String,
  description: String,
  position: Number,
  headerImage: String,
});

const Header = mongoose.model("hotelAboutUsHeader", hotelAboutUsHeaderSchema);
const Content = mongoose.model("AboutUsContent", hotelAboutUsContentSchema);

module.exports = {
  Header,
  Content,
};
