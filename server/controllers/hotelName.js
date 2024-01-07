const hotelNameShema = require("../models/hotelNameSchema");
const hotelNameUpload = require("express").Router();

// get request
hotelNameUpload.get("/hotelname", (request, response) => {
  hotelNameShema.find({}).then((name) => {
    response.json(name);
  });
});

// post and update
hotelNameUpload.post("/hotelname", async (request, response) => {
  try {
    const existingName = await hotelNameShema.findOne();

    // If a logo exists, replace it
    if (existingName) {
      await hotelNameShema.findOneAndDelete();
    }
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Hotel name is required" });
    }
    const newHotelName = await hotelNameShema.create({ hotelName: name });
    response.status(201).json(newHotelName);
  } catch (error) {
    console.error("Error creating/updating the hotel name", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = hotelNameUpload;
