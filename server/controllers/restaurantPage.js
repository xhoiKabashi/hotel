const uploadRestaurantPage = require("express").Router();
const RestaurantPageSchema = require("../models/restaurantPageSchema");
const upload = require("../utils/multer");

uploadRestaurantPage.post(
  "/editRestaurantPage",
  upload.single("file"),
  async (request, response) => {
    try {
      const fieldsToUpdate = [
        "levelOneTitle",
        "levelTwoTitle",
        "levelThreeTitle",
      ];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });

      if (request.file) {
        updateFields.restaurantPageHeaderImg = request.file.filename;
      }

      const updateRestaurantPage = await RestaurantPageSchema.findOneAndUpdate(
        {},
        updateFields,
        { new: true, upsert: true }
      ).catch((error) => {
        console.error("MongoDB Update Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });

      response.status(200).json(updateRestaurantPage);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

uploadRestaurantPage.get("/editRestaurantPage", (request, response) => {
  try {
    RestaurantPageSchema.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = uploadRestaurantPage;
