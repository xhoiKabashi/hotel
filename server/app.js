const express = require("express");
const navbar = require("./controllers/navbar");
const logoUpload = require("./controllers/logo");
const uploadHomeHeader = require("./controllers/hotelHomeHeader");
const uploadRestaurantPage = require("./controllers/restaurantPage");
const uploadRestaurantContent = require("./controllers/restaurantContent");
const updateAboutUs = require("./controllers/hotelAboutUs");
const uploloadContactUs = require("./controllers/contactUs");
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
app.use("/api", navbar);
app.use("/", logoUpload);
app.use("/", uploadHomeHeader);
app.use("/", uploadRestaurantPage);
app.use("/", uploadRestaurantContent);
app.use("/", updateAboutUs);
app.use("/", uploloadContactUs);
app.use("/", updateSocial);
app.use("/", updateRoom);

module.exports = app;
