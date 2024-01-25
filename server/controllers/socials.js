const updateSocial = require("express").Router();
const { Social } = require("../models/hotelSocialSchema");
const upload = require("../utils/multer");

updateSocial.post(
  "/social-data",
  upload.fields([
    { name: "instaImage", maxCount: 1 },
    { name: "fbImage", maxCount: 1 },
    { name: "youTubeImage", maxCount: 1 },
    { name: "tikTokImage", maxCount: 1 },
  ]),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["instaUrl", "fbUrl", "youTubeUrl", "tikTokUrl"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });
      const photosToUpdate = [
        "instaImage",
        "fbImage",
        "youTubeImage",
        "tikTokImage",
      ];

      photosToUpdate.forEach((photo) => {
        if (request.files && request.files[photo]) {
          updateFields[photo] = request.files[photo][0].filename;
        }
      });

      const updatedHeader = await Social.findOneAndUpdate({}, updateFields, {
        new: true,
        upsert: true,
      }).catch((error) => {
        console.error("Update Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });

      response.status(200).json(updatedHeader);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

updateSocial.get("/social-data", (request, response) => {
  try {
    Social.find({}).then((social) => {
      response.status(200).json(social);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = updateSocial;
