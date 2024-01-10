const mongoose = require("mongoose");
mongoose.set("strict", false);

const logoSchema = new mongoose.Schema({
  logoImage: {
    type: String,
  },
  logoImageUrl: {
    type: String,
  },
});

logoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("LogoSchema", logoSchema);
