const mongoose = require("mongoose");
const { transformObject } = require("../helpers/helpers");

mongoose.set("strict", false);

const hotelHomeHeaderSchema = new mongoose.Schema(
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

const hotelHomeContentSchema = new mongoose.Schema({
  title: String,
  description: String,
  position: Number,
  headerImage: String,
});

const Header = mongoose.model("HotelHomeHeaderSchema", hotelHomeHeaderSchema);
const Content = mongoose.model("HotelHomeContent", hotelHomeContentSchema);

module.exports = {
  Header,
  Content,
};
