const updateRoomInstances = require("express").Router();
const { RoomInstance } = require("../../models/rooms/roomsSchema");

// Create Many
updateRoomInstances.post("/room-instances", async (request, response) => {
  try {
    console.log(response.body?.roomNumber);
    const fieldsToUpdate = ["roomNumber", "roomType", "available"];
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

updateRoomInstances.post("/room-instances/:id", async (request, response) => {
  try {
    const roomId = request.params.id;
    const fieldsToUpdate = ["roomNumber", "roomType", "available"];
    const updateFields = {};

    fieldsToUpdate.forEach((field) => {
      if (request.body[field]) {
        updateFields[field] = request.body[field];
      }
    });

    const updateInstance = await RoomInstance.findByIdAndUpdate(
      roomId,
      updateFields,
      {
        new: true,
      }
    );
    response.status(200).json(updateInstance);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// get all
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

// GET ONE
updateRoomInstances.get("/room-instances/:id", async (request, response) => {
  try {
    const roomNumber = request.params.id;
    console.log(roomNumber);

    const room = await RoomInstance.findOne({ roomNumber });

    if (!room) {
      return response.status(404).json({ error: "Room not found" });
    }

    response.json(room);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

//  delete one
updateRoomInstances.delete("/room-instances/:id", async (request, response) => {
  try {
    const roomId = request.params.id;

    const deletedRoom = await RoomInstance.findByIdAndDelete(roomId);

    if (!deletedRoom) {
      return response.status(404).json({ error: "Room not found" });
    }

    response.json({ message: "Room deleted successfully", deletedRoom });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = updateRoomInstances;
