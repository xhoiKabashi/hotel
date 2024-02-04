const homePage = require("express").Router();
const { homeContent } = require("../models/contentSchema");
const upload = require("../utils/multer");
const { homeHeader } = require("../models/headerSchema");

homePage.post(
  "/home-header",
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

      const updatedHeader = await homeHeader.findOneAndUpdate(
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
// Post Content
let lastUpdatedContentId = null;
homePage.post(
  "/home-content",
  upload.single("file"),
  async (request, response) => {
    try {
      const fieldsToUpdate = ["title", "description", "position"];
      // Find all existing content
      const existingContent = await homeContent.find({});

      if (existingContent.length >= 3) {
        // If there are already 3 documents, find the next one to update
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
        const updateFields = {};

        fieldsToUpdate.forEach((field) => {
          if (request.body[field]) {
            updateFields[field] = request.body[field];
          }
        });
        if (request.file) {
          updateFields.headerImage = request.file.filename;
        }

        const updatedContent = await homeContent.findByIdAndUpdate(
          existingContent[indexToUpdate]._id,
          updateFields,
          { new: true, upsert: true } // Returns the updated document
        );

        // Update the last updated content ID
        lastUpdatedContentId = updatedContent._id.toString();

        response.status(200).json(updatedContent);
      } else {
        // If fewer than 3 documents exist, create a new one
        const newContent = new homeContent({
          title: request.body.title,
          description: request.body.description,
          position: request.body.position,
          headerImage: request.file ? request.file.filename : undefined,
        });

        const savedContent = await newContent.save();

        // Update the last updated content ID
        lastUpdatedContentId = savedContent._id.toString();

        response.status(200).json(savedContent);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//  Get Header
homePage.get("/editHomeHeader", (request, response) => {
  homeHeader.find({}).then((header) => {
    response.json(header);
  });
});

// Get Content
homePage.get("/homeContent", (request, response) => {
  try {
    homeContent.find({}).then((content) => {
      response.json(content);
    });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = homePage;
