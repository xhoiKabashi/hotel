const hotelNameShema = require("../models/hotelNameSchema");
const hotelNameUpload = require("express").Router();

// get request
hotelNameUpload.get("/hotelname", (request, response) => {
  hotelNameShema.find({}).then((name) => {
    response.json(name);
  });
});

// post and update
// post and update
hotelNameUpload.post("/hotelname", async (request, response) => {
  try {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Hotel name is required" });
    }

    // Check if there's an existing hotel name
    const existingName = await hotelNameShema.findOne();

    if (existingName) {
      // If an existing name exists, update it
      await hotelNameShema.findOneAndUpdate({}, { hotelName: name });
      response.status(200).json({ message: "Hotel name updated successfully" });
    } else {
      // If no existing name, create a new one
      const newHotelName = await hotelNameShema.create({ hotelName: name });
      response.status(201).json(newHotelName);
    }
  } catch (error) {
    console.error("Error creating/updating the hotel name", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = hotelNameUpload;
