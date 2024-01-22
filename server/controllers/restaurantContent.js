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
  upload.single("file"),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["title", "description"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
        if (request.file) {
          updateFields.image = request.file.filename;
        }
      });
      const updateDinner = await Dinner.findOneAndUpdate({}, updateFields, {
        new: true,
        upsert: true,
      });
      response.status(200).json(updateDinner);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//  lunch POST

uploadRestaurantContent.post(
  "/lunch",
  upload.array("photos", 4),
  async (request, response) => {
    try {
      const fieldsToUpdate = [
        "title",
        "description",
        "main",
        "collageOne",
        "collageTwo",
        "collageThree",
      ];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });

      // Assuming you want to handle multiple files and update an array of filenames
      if (request.files) {
        // Assuming you have an array of filenames in request.files
        updateFields.photos = request.files.map((file) => file.filename);
      }

      const updateLunch = await Lunch.findOneAndUpdate({}, updateFields, {
        new: true,
        upsert: true,
      });

      response.status(200).json(updateLunch);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// brekfast POST

uploadRestaurantContent.post(
  "/breakfast",
  upload.single("file"),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["title", "description"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
        if (request.file) {
          updateFields.image = request.file.filename;
        }
      });
      const updateBreakfast = await Breakfast.findOneAndUpdate(
        {},
        updateFields,
        {
          new: true,
          upsert: true,
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
