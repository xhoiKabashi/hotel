const uploadHomeHeader = require("express").Router();
const HotelHomeHeaderSchema = require("../models/hotelHomeHeaderSchema");
const upload = require("../utils/multer");

uploadHomeHeader.post(
  "/editHomeHeader",
  upload.single("file"),
  async (request, response) => {
    console.log("Received Form Data:", request.body);
    console.log("Received File:", request.file);
    try {
      const existingHeader = await HotelHomeHeaderSchema.findOne();
      if (existingHeader) {
        await HotelHomeHeaderSchema.findOneAndDelete();
      }

      const result = await HotelHomeHeaderSchema.create({
        levelOneTitle: request.body.levelOneTitle,
        levelTwoTitle: request.body.levelTwoTitle,
        levelThreeTitle: request.body.levelThreeTitle,
        headerImage: request.file?.filename,
      });
      response.status(201).json(result);
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

uploadHomeHeader.get("/editHomeHeader", (request, response) => {
  HotelHomeHeaderSchema.find({}).then((header) => {
    response.json(header);
  });
});

module.exports = uploadHomeHeader;
