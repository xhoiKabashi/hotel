const uploadRestaurantContent = require("express").Router();
const {
  Lunch,
  Breakfast,
  Dinner,
} = require("../models/restaurantPageContentSchema");
const upload = require("../utils/multer");

// dinner POST

uploadRestaurantContent.post(
  "/dinner",
  upload.array("photos", 4),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["title", "description", "position"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });

      if (request.files && request.files.length > 0) {
        updateFields.photos = request.files.map((file) => file.filename);
      }

      const updateDinner = await Dinner.findOneAndUpdate(
        {},
        { $set: updateFields },
        {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        }
      );

      response.status(200).json(updateDinner);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// lunch POST

uploadRestaurantContent.post(
  "/lunch",
  upload.array("photos", 4),
  async (request, response) => {
    try {
      console.log(response.photos);
      const fieldsToUpdate = ["title", "description", "position"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });

      if (request.files && request.files.length > 0) {
        updateFields.photos = request.files.map((file) => file.filename);
      }

      const updateLunch = await Lunch.findOneAndUpdate(
        {},
        { $set: updateFields },
        {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        }
      );

      response.status(200).json(updateLunch);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// breakfast POST

uploadRestaurantContent.post(
  "/breakfast",
  upload.array("photos", 4),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["title", "description", "position"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });

      if (request.files && request.files.length > 0) {
        updateFields.photos = request.files.map((file) => file.filename);
      }

      const updateBreakfast = await Breakfast.findOneAndUpdate(
        {},
        { $set: updateFields },
        {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        }
      );

      response.status(200).json(updateBreakfast);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// dinner GET

uploadRestaurantContent.get("/dinner", (request, response) => {
  try {
    Dinner.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

// lunch GET

uploadRestaurantContent.get("/lunch", (request, response) => {
  try {
    Lunch.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

// breakfast GET

uploadRestaurantContent.get("/breakfast", (request, response) => {
  try {
    Breakfast.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = uploadRestaurantContent;
