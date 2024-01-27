const updateRoom = require("express").Router();
const { RoomData } = require("../models/roomsSchema");
const upload = require("../utils/multer");

updateRoom.post(
  "/rooms",
  upload.fields([
    { name: "imageHeader", maxCount: 1 },
    { name: "collage", maxCount: 10 },
  ]),
  async (request, response) => {
    try {
      const updateField = {};
      if (request.body.roomType) {
        updateField.roomType = request.body.roomType;
      }

      if (request.body.features) {
        const { size, occupacity } = request.body.features;
        updateField.features = { size, occupacity };
      }

      if (request.file) {
        updateField.imageHeader = request.file.filename;
      }
      if (request.file) {
        updateField.collage = request.files.map((file) => file.filename);
      }

      const updatedRoom = await RoomData.insertMany(updateField);
      response.json(updatedRoom);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

updateRoom.get("/rooms", (request, response) => {
  try {
    RoomData.find({}).then((data) => {
      response.json(data);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

updateRoom.get("/rooms/:id", async (request, response) => {
  try {
    const roomType = request.params.id;

    const room = await RoomData.findOne({ roomType });

    if (!room) {
      return response.status(404).json({ error: "Room not found" });
    }

    response.json(room);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = updateRoom;
