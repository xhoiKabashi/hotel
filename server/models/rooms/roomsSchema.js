const mongoose = require("mongoose");
const { Schema } = mongoose; // Import Schema from mongoose

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

const RoomInstanceSchema = new mongoose.Schema({
  roomNumber: String,
  available: Boolean,
  roomType: String, // Reference to the RoomsSchema
});

const RoomData = mongoose.model("RoomData", RoomsSchema);
const RoomInstance = mongoose.model("RoomInstance", RoomInstanceSchema);

module.exports = { RoomData, RoomInstance };
