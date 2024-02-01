const restaurantHeader = require("express").Router();
const upload = require("../utils/multer");
const { Header } = require("../models/headerSchema");

restaurantHeader.post(
  "/restaurant-header",
  upload.single("file"),
  async (request, response) => {
    try {
      console.log("Request Body:", request.body);
      console.log("Request File:", request.file);
      // If a header exists, update the specific fields
      const fieldsToUpdate = ["h1Text", "h2Text", "h3Text"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });
      if (request.file) {
        updateFields.headerImage = request.file.filename;
      }

      const updatedHeader = await Header.findOneAndUpdate(
        {},
        updateFields,
        { new: true, upsert: true } // Returns the updated document
      );
      response.status(200).json(updatedHeader);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

restaurantHeader.get("/restaurant-header", (request, response) => {
  try {
    Header.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = restaurantHeader;
