const navbar = require("express").Router();
const multer = require("multer");
const path = require("path");

const NavbarSchema = require("../models/navbarSchema");

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Specify upload directory
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

navbar.post("/uploads", upload.single("file"), async (request, response) => {
  try {
    const result = await NavbarSchema.create({
      logoImage: request.file?.filename,
    });
    console.log(result);
    response.status(201).json(result);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// get all
navbar.get("/", (request, response) => {
  NavbarSchema.find({}).then((nav) => {
    response.json(nav);
  });
});

module.exports = navbar;
