const mongoose = require("mongoose");

mongoose.set("strict", false);

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  position: Number,
  headerImage: String,
});

const Content = mongoose.model("ContentSchema", contentSchema);

module.exports = {
  Content,
};
