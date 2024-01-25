const mongoose = require("mongoose");
mongoose.set("strict", false);

const RoomsSchema = new mongoose.Schema({
  imageHeader: String,
  roomType: String,
});

const RoomData = mongoose.model("RoomData", RoomsSchema);

module.exports = { RoomData };
