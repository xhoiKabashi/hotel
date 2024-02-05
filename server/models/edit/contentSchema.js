const mongoose = require("mongoose");

mongoose.set("strict", false);

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  position: Number,
  headerImage: String,
});

const homeContent = mongoose.model("homeContent", contentSchema);
const aboutContent = mongoose.model("aboutContent", contentSchema);

module.exports = {
  homeContent,
  aboutContent,
};
