// Inside hotelAboutUsSchema.js or a similar file
const mongoose = require("mongoose");

const SocialMedia = new mongoose.Schema({
  instaUrl: String,
  instaImage: String,

  fbUrl: String,
  fbImage: String,

  YouTubeImage: String,
  YouTubeUrl: String,

  TikTokImage: String,
  TikTokUrl: String,
});

const Social = mongoose.model("SocialMedia", SocialMedia);
module.exports = {
  Social,
};
