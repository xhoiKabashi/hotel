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
      // If a header exists, update the specific fields
      const updateFields = {};

      if (request.body.levelOneTitle) {
        updateFields.levelOneTitle = request.body.levelOneTitle;
      }

      if (request.body.levelTwoTitle) {
        updateFields.levelTwoTitle = request.body.levelTwoTitle;
      }

      if (request.body.levelThreeTitle) {
        updateFields.levelThreeTitle = request.body.levelThreeTitle;
      }

      if (request.file) {
        updateFields.headerImage = request.file.filename;
      }

      const updatedHeader = await HotelHomeHeaderSchema.findOneAndUpdate(
        {},
        updateFields,
        { new: true } // Returns the updated document
      );

      response.status(200).json(updatedHeader);
    } catch (error) {
      console.error(error);
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
