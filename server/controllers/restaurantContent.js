const uploadRestaurantContent = require("express").Router();
const RestaurantContentSchema = require("../models/restaurantPageContentSchema");
const upload = require("../utils/multer");

uploadRestaurantContent.post(
  "/restaurantContent",
  upload.array("images", 3),
  async (request, response) => {
    try {
      const { meal, title, description } = request.body;
      const imagePaths = request.files.map((file) => file.filename);

      // Update the corresponding meal with image paths
      const updatedContent = await RestaurantPageContent.findOneAndUpdate(
        {},
        { [meal]: { title, description, images: imagePaths } },
        { new: true, upsert: true }
      );

      response.json(updatedContent);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
