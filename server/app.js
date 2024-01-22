const express = require("express");
const navbar = require("./controllers/navbar");
const logoUpload = require("./controllers/logo");
const hotelNameUpload = require("./controllers/hotelName");
const uploadHomeHeader = require("./controllers/hotelHomeHeader");
const uploadRestaurantPage = require("./controllers/restaurantPage");
const uploadRestaurantContent = require("./controllers/restaurantContent");

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
app.use("/", hotelNameUpload);
app.use("/", uploadHomeHeader);
app.use("/", uploadRestaurantPage);
app.use("/", uploadRestaurantContent);

module.exports = app;
