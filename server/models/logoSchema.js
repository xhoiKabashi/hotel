const mongoose = require("mongoose");
mongoose.set("strict", false);

const logoSchema = new mongoose.Schema({
  logoImage: {
    type: String,
  },
  hotelName: {
    type: String,
  },
  googleMapLink: String,
});

module.exports = mongoose.model("LogoSchema", logoSchema);
