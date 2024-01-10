const logoUpload = require("express").Router();
const LogoSchema = require("../models/logoSchema");
const upload = require("../utils/multer");

logoUpload.post(
  "/uploads",
  upload.single("file"),
  async (request, response) => {
    try {
      // Check if a logo already exists
      const existingLogo = await LogoSchema.findOne();

      // If a logo exists, replace it
      if (existingLogo) {
        await LogoSchema.findOneAndDelete();
      }

      // Create the new logo
      const result = await LogoSchema.create({
        logoImage: request.file?.filename,
        logoImageUrl: request.body.logoImageUrl,
      });
      console.log(result);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// get all (unchanged)
logoUpload.get("/uploads", (request, response) => {
  LogoSchema.find({}).then((logo) => {
    response.json(logo);
  });
});

module.exports = logoUpload;
