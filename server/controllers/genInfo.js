const generalInfoUpload = require("express").Router();
const GenInfoSchema = require("../models/genInfoSchema");
const upload = require("../utils/multer");

generalInfoUpload.post(
  "/general-info",
  upload.fields([
    { name: "logoImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),

  async (request, response) => {
    try {
      const textToUpload = [
        "hotelName",
        "googleMapLink",
        "address",
        "phoneNumber",
        "quote",
      ];

      const fileUpload = ["logoImage", "headerImage"];
      const updateFields = {};

      textToUpload.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });
      fileUpload.forEach((photo) => {
        if (request.files && request.files[photo]) {
          updateFields[photo] = request.files[photo][0].filename;
        }
      });

      const updateContent = await GenInfoSchema.findOneAndUpdate(
        {},
        updateFields,
        {
          new: true,
          upsert: true,
        }
      ).catch((error) => {
        console.error("Update Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });

      response.status(200).json(updateContent);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

generalInfoUpload.get("/logo", (request, response) => {
  GenInfoSchema.find({}).then((logo) => {
    response.json(logo);
  });
});

generalInfoUpload.get("/contact-data", (request, response) => {
  GenInfoSchema.find({}).then((logo) => {
    response.json(logo);
  });
});

module.exports = generalInfoUpload;
