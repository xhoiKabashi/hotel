const mongoose = require("mongoose");

mongoose.set("strict", false);

const SocialMedia = new mongoose.Schema({
  instaUrl: String,
  instaImage: String,

  fbUrl: String,
  fbImage: String,

  youTubeImage: String,
  youTubeUrl: String,

  tikTokImage: String,
  tikTokUrl: String,
});

const Social = mongoose.model("SocialMedia", SocialMedia);
module.exports = {
  Social,
};
