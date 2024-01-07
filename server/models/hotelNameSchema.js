const mongoose = require("mongoose");

mongoose.set("strict", false);

const hotelNameShema = new mongoose.Schema({
  hotelName: {
    type: String,
  },
});

module.exports = mongoose.model("HotelName", hotelNameShema);
