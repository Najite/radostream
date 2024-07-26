const express = require("express");
const {uploadAudio, getAudio, getUserAudios, deleteAudio} = require("../controllers/audioConroller");
const multer = require("multer");
const upload = multer({ dest: "uploads/"});

const router = express.Router();

router.post("/upload", upload.single("file"), uploadAudio);
router.get("/:id", getAudio);
router.get("/user/:userid", getUserAudios);
router.delete("/:id", deleteAudio);

module.exports = router;