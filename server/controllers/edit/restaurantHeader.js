const restaurantHeader = require("express").Router();
const upload = require("../../utils/multer");
const { restaurantHeaderSc } = require("../../models/edit/headerSchema");

restaurantHeader.post(
  "/restaurant-header",
  upload.single("file"),
  async (request, response) => {
    try {
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

      const updatedHeader = await restaurantHeaderSc.findOneAndUpdate(
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
    restaurantHeaderSc.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = restaurantHeader;
