const express = require("express");
// edit
const generalInfoUpload = require("./controllers/edit/genInfo");
const restaurantHeader = require("./controllers/edit/restaurantHeader");
const uploadRestaurantContent = require("./controllers/edit/restaurantContent");
const aboutPage = require("./controllers/edit/aboutPage");
const homePage = require("./controllers/edit/homePage");
const updateSocial = require("./controllers/edit/socials");
// rooms
const updateRoom = require("./controllers/rooms/rooms");

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
app.use("/", updateSocial);
app.use("/", updateRoom);

module.exports = app;
