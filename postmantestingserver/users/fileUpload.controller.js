const express = require("express");
const router = express.Router();
var path = require("path");
var multer = require("multer");
//var upload = multer({ dest: "uploads/" });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination");
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    console.log("originalname", file.originalname);
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/single", upload.single("profile"), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});
router.post("/bulk", upload.array("profiles", 4), (req, res) => {
  try {
    res.send(req.files);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});

module.exports = router;
