const express = require("express");
const navbar = require("./controllers/navbar");
const logoUpload = require("./controllers/navbar");

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

app.use(cors());
app.use(express.json());
app.use("/api", navbar);
app.use("/", logoUpload);

module.exports = app;
