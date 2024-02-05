const mongoose = require("mongoose");
mongoose.set("strict", false);

const RoomsSchema = new mongoose.Schema({
  imageHeader: String,
  roomType: String,
  features: {
    size: String,
    occupacity: String,
    bed: String,
    bathroom: String,
  },
  description: String,
  amenities: [],
});

const RoomData = mongoose.model("RoomData", RoomsSchema);

module.exports = { RoomData };
