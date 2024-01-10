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

module.exports = mongoose.model("HotelHomeHeaderSchema", hotelHomeHeaderSchema);
