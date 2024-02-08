const updateRoomInstances = require("express").Router();
const { RoomInstance } = require("../../models/rooms/roomsSchema");

// Create Many
updateRoomInstances.post("/room-instances", async (request, response) => {
  try {
    console.log(response.body?.roomNumber);
    const fieldsToUpdate = ["roomNumber", "roomType"];
    const updateFields = {};

    fieldsToUpdate.forEach((field) => {
      if (request.body[field]) {
        updateFields[field] = request.body[field];
      }
    });
    const updateInstance = await RoomInstance.create(updateFields);
    response.status(200).json(updateInstance);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

updateRoomInstances.get("/room-instances", (request, response) => {
  try {
    RoomInstance.find({}).then((data) => {
      response.status(200).json(data);
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = updateRoomInstances;
