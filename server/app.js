const express = require("express");
const generalInfoUpload = require("./controllers/genInfo");
const restaurantHeader = require("./controllers/restaurantPage");
const uploadRestaurantContent = require("./controllers/restaurantContent");
const aboutPage = require("./controllers/aboutPage");
const homePage = require("./controllers/homePage");
// const uploloadContactUs = require("./controllers/contactUs");
const updateSocial = require("./controllers/socials");
const updateRoom = require("./controllers/rooms");

const config = require("./utils/config");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use("/", generalInfoUpload);
app.use("/", homePage);
app.use("/", restaurantHeader);
app.use("/", uploadRestaurantContent);
app.use("/", aboutPage);
// app.use("/", uploloadContactUs);
app.use("/", updateSocial);
app.use("/", updateRoom);

module.exports = app;
