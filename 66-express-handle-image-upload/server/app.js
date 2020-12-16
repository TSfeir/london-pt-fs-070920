const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const app = express();
const port = 3001;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb, err) => {
  console.log(file);
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/gif"
  ) {
    console.log("TRUE?");
    cb(null, true);
  } else {
    console.log("FALSE?");
    req.fileValidationError = `Needs to be images only`;
    return cb(new Error("Needs to be images only"));
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  onError: function (err, next) {
    console.log("error", err);
    next(err);
  },
}).single(`image`);

app.use(express.json());

app.post("/uploads", (req, res) => {
  upload(req, res, (err) => {
    if (req.fileValidationError) {
      return res.status(400).send(req.fileValidationError);
    }
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send(`File size should be less than 2mb`);
      }
      return res.status(400).send(`ERROR: ${err.code}`);
    }
    res.status(200).send("File has been uploaded");
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
