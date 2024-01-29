const logoUpload = require("express").Router();
const LogoSchema = require("../models/logoSchema");
const upload = require("../utils/multer");

logoUpload.post("/logo", upload.single("file"), async (request, response) => {
  try {
    console.log("Request Body:", request.body);
    console.log("Request File:", request.file);
    const updateFields = {};

    if (request.body.hotelName) {
      updateFields.hotelName = request.body.hotelName;
    }
    if (request.body.googleMapLink) {
      updateFields.googleMapLink = request.body.googleMapLink;
    }
    if (request.file) {
      updateFields.logoImage = request.file.filename;
    }
    const updateContent = await LogoSchema.findOneAndUpdate({}, updateFields, {
      new: true,
      upsert: true,
    }).catch((error) => {
      console.error("Update Error:", error);
      response.status(500).json({ error: "Internal Server Error" });
    });

    response.status(200).json(updateContent);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

logoUpload.get("/logo", (request, response) => {
  LogoSchema.find({}).then((logo) => {
    response.json(logo);
  });
});

module.exports = logoUpload;
