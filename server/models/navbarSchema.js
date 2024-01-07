const mongoose = require("mongoose");
mongoose.set("strict", false);

const navbarSchema = new mongoose.Schema({
  menuName: {
    type: String,
    // required: true,
  },
  logoName: {
    type: String,
    // required: true,
  },
  logoNameUrl: {
    type: String,
    // required: true,
  },
  logoImage: {
    type: String,
  },
  logoImageUrl: {
    type: String,
  },
  bookNow: {
    type: String,
    // required: true,
  },
});

navbarSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("NavbarSchema", navbarSchema);
