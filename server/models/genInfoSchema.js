const mongoose = require("mongoose");
mongoose.set("strict", false);

const GenInfoSchema = new mongoose.Schema({
  logoImage: String,
  hotelName: String,
  googleMapLink: String,
  address: String,
  phoneNumber: String,
  quote: String,
  headerImage: String,
});

module.exports = mongoose.model("GenInfoSchema", GenInfoSchema);
