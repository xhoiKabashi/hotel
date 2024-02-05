const mongoose = require("mongoose");
mongoose.set("strict", false);

const RoomsSchema = new mongoose.Schema({
  imageHeader: String,
  roomType: String,
  size: String,
  occupacity: String,
  bed: String,
  bathroom: String,
  description: String,
  airConditioner: Boolean,
  tv: Boolean,
  wifi: Boolean,
  slippers: Boolean,
  shampoo: Boolean,
  safeBox: Boolean,
  petFriendly: Boolean,
  towels: Boolean,
  hairDryer: Boolean,
  espressoMachine: Boolean,
  workDesk: Boolean,
  welcomeDrinks: Boolean,
  iron: Boolean,
  airPurifier: Boolean,
  smokeDetectors: Boolean,
  roomRefrigerator: Boolean,
});

const RoomData = mongoose.model("RoomData", RoomsSchema);

module.exports = { RoomData };
