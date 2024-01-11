const uploadRestaurantPage = require("express").Router();
const RestaurantPageSchema = require("../models/restaurantPageSchema");
const upload = require("../utils/multer");

uploadRestaurantPage.post(
  "/editRestaurantPage",
  upload.single("file"),
  async (request, response) => {
    console.log("Recived From Data", request.body);
    console.log("Received File:", request.file);
    try {
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
      if (request.body.restauratLevelOneInterduction) {
        updateFields.restauratLevelOneInterduction =
          request.body.restauratLevelOneInterduction;
      }
      if (request.body.restauratLevelOneInterductionImg) {
        updateFields.restauratLevelOneInterductionImg =
          request.body.restauratLevelOneInterductionImg;
      }
      if (request.body.restauratLevelTwoInterduction) {
        updateFields.restauratLevelTwoInterduction =
          request.body.restauratLevelTwoInterduction;
      }
      if (request.body.restauratLeveTwoInterductionImg) {
        updateFields.restauratLeveTwoInterductionImg =
          request.body.restauratLeveTwoInterductionImg;
      }
      if (request.body.breakfastDescription) {
        updateFields.breakfastDescription = request.body.breakfastDescription;
      }
      if (request.body.breakfastDescriptionImg) {
        updateFields.breakfastDescriptionImg =
          request.body.breakfastDescriptionImg;
      }
      if (request.body.breakfastDescriptionCollage) {
        updateFields.breakfastDescriptionCollage =
          request.body.breakfastDescriptionCollage;
      }
      if (request.body.lunchDescription) {
        updateFields.lunchDescription = request.body.lunchDescription;
      }
      if (request.body.lunchDescriptionImg) {
        updateFields.lunchDescriptionImg = request.body.lunchDescriptionImg;
      }
      if (request.body.lunchDescriptionCollage) {
        updateFields.lunchDescriptionCollage =
          request.body.lunchDescriptionCollage;
      }
      if (request.body.dinnerDescription) {
        updateFields.dinnerDescription = request.body.dinnerDescription;
      }
      if (request.body.dinnerDescriptionImg) {
        updateFields.dinnerDescriptionImg = request.body.dinnerDescriptionImg;
      }
      if (request.body.dinnerDescriptionCollage) {
        updateFields.dinnerDescriptionCollage =
          request.body.dinnerDescriptionCollage;
      }
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
    RestaurantPageSchema.find({}).then((page) => {
      response.json(page);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = uploadRestaurantPage;
