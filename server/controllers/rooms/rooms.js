const updateRoom = require("express").Router();
const { RoomData } = require("../../models/rooms/roomsSchema");
const upload = require("../../utils/multer");

updateRoom.post(
  "/rooms",
  upload.fields([
    { name: "imageHeader", maxCount: 1 },
    { name: "photos", maxCount: 10 },
  ]),
  async (request, response) => {
    try {
      console.log("Files received:", request.files);

      const textToUpload = [
        "roomType",
        "size",
        "occupacity",
        "bed",
        "bathroom",
        "description",
        "airConditioner",
        "tv",
        "wifi",
        "slippers",
        "shampoo",
        "safeBox",
        "petFriendly",
        "towels",
        "hairDryer",
        "workDesk",
        "espressoMachine",
        "welcomeDrinks",
        "iron",
        "airPurifier",
        "smokeDetectors",
        "roomRefrigerator",
      ];

      const fileUpload = ["imageHeader"];
      const updateFields = {};

      textToUpload.forEach((field) => {
        if (request.body[field]) {
          updateFields[field] = request.body[field];
        }
      });
      fileUpload.forEach((photo) => {
        if (request.files && request.files[photo]) {
          updateFields[photo] = request.files[photo][0].filename;
        }
      });

      if (request.files) {
        updateFields.photos = request.files.photos.map((file) => file.filename);
      }

      const updatedRoom = await RoomData.insertMany(updateFields);
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
