const aboutPage = require("express").Router();
const { Content } = require("../models/contentSchema");
const upload = require("../utils/multer");
const { Header } = require("../models/headerSchema");

aboutPage.post(
  "/about-us-header",
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

      const updatedHeader = await Header.findOneAndUpdate({}, updateFields, {
        new: true,
        upsert: true,
      }).catch((error) => {
        console.error("Update Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });

      response.status(200).json(updatedHeader);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// post Content

let lastUpdatedContentId = null;
aboutPage.post(
  "/about-us-content",
  upload.single("file"),
  async (request, response) => {
    try {
      // Find all existing content
      const existingContent = await Content.find({});

      if (existingContent.length >= 4) {
        // If there are already 4 documents, find the next one to update
        const nextUpdateIndex =
          lastUpdatedContentId !== null
            ? existingContent.findIndex(
                (content) => content._id.toString() === lastUpdatedContentId
              ) + 1
            : 0;

        // If we reached the end, loop back to the first document
        const indexToUpdate =
          nextUpdateIndex >= existingContent.length ? 0 : nextUpdateIndex;

        // Update the chosen document
        const fieldsToUpdate = ["title", "description", "position"];
        const updateFields = {};

        fieldsToUpdate.forEach((field) => {
          if (request.body[field]) {
            updateFields[field] = request.body[field];
          }
        });
        if (request.file) {
          updateFields.headerImage = request.file.filename;
        }

        const updatedContent = await Content.findByIdAndUpdate(
          existingContent[indexToUpdate]._id,
          updateFields,
          { new: true } // Returns the updated document
        );

        // Update the last updated content ID
        lastUpdatedContentId = updatedContent._id.toString();

        response.status(200).json(updatedContent);
      } else {
        // If fewer than 4 documents exist, create a new one
        const newContent = new Content({
          title: request.body.title,
          description: request.body.description,
          position: request.body.position,
          headerImage: request.file ? request.file.filename : undefined,
        });

        const savedContent = await newContent.save();

        lastUpdatedContentId = savedContent._id.toString();

        response.status(200).json(savedContent);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// get Header

aboutPage.get("/about-us-header", (request, response) => {
  try {
    Header.find({}).then((data) => {
      response.status(200).json(data);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

aboutPage.get("/about-us-content", (request, response) => {
  try {
    Content.find({}).then((data) => {
      response.status(200).json(data);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = aboutPage;
