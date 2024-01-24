const uploadHomeHeader = require("express").Router();
const { Header, Content } = require("../models/hotelHomeHeaderSchema");
const upload = require("../utils/multer");

uploadHomeHeader.post(
  "/editHomeHeader",
  upload.single("file"),
  async (request, response) => {
    try {
      // If a header exists, update the specific fields
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

      if (request.file) {
        updateFields.headerImage = request.file.filename;
      }

      const updatedHeader = await Header.findOneAndUpdate(
        {},
        updateFields,
        { new: true } // Returns the updated document
      );

      response.status(200).json(updatedHeader);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
// Post Content

uploadHomeHeader.post(
  "/homeContent",
  upload.single("file"),
  async (request, response) => {
    try {
      // Find all existing content
      const existingContent = await Content.find({});
      let updatedContent;

      if (existingContent.length >= 3) {
        // If there are already 3 documents, update the first one
        const updateFields = {};

        if (request.body.title) {
          updateFields.title = request.body.title;
        }

        if (request.body.description) {
          updateFields.description = request.body.description;
        }

        if (request.body.position) {
          updateFields.position = request.body.position;
        }

        if (request.file) {
          updateFields.headerImage = request.file.filename;
        }

        updatedContent = await Content.findOneAndUpdate(
          {},
          updateFields,
          { new: true } // Returns the updated document
        );
      } else {
        // If fewer than 3 documents exist, create a new one
        const newContent = new Content({
          title: request.body.title,
          description: request.body.description,
          position: request.body.position,
          headerImage: request.file ? request.file.filename : undefined,
        });

        updatedContent = await newContent.save();
      }

      response.status(200).json(updatedContent);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//  Get Header
uploadHomeHeader.get("/editHomeHeader", (request, response) => {
  Header.find({}).then((header) => {
    response.json(header);
  });
});

// Get Content
uploadHomeHeader.get("/homeContent", (request, response) => {
  try {
    Content.find({}).then((content) => {
      response.json(content);
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = uploadHomeHeader;
