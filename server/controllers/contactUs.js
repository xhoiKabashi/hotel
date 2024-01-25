const uploloadContactUs = require("express").Router();
const { ContactUs } = require("../models/contactUsSchema");
const upload = require("../utils/multer");

uploloadContactUs.post(
  "/contact-data",
  upload.single("file"),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["address", "phoneNumber", "headerImage", "quote"];
      const updateFields = {};

      fieldsToUpdate.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });
      if (request.file) {
        updateFields.headerImage = request.file.filename;
      }

      const updatedContent = await ContactUs.findOneAndUpdate(
        {},
        updateFields,
        {
          new: true,
          upsert: true,
        }
      ).catch((error) => {
        console.error("Update Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });

      response.status(200).json(updatedContent);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

uploloadContactUs.get("/contact-data", (request, response) => {
  try {
    ContactUs.find({}).then((contact) => {
      response.status(200).json(contact);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = uploloadContactUs;
