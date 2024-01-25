// Inside hotelAboutUsSchema.js or a similar file
const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  address: String,
  phoneNumber: String,
  quote: String,
  headerImage: String,
});

const ContactUs = mongoose.model("ContactUsSchema", ContactUsSchema);
module.exports = {
  ContactUs,
};
