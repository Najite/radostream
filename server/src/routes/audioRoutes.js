const express = require("express");
const {uploadAudio, getAudio, getUserAudios, deleteAudio} = require("../controllers/audioConroller");
const authenticate = require("../middleware/authmiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/"});

const router = express.Router();

router.post("/upload", authenticate, upload.single("file"), uploadAudio);
router.get("/:id", getAudio);
router.get("/user/:userid", authenticate, getUserAudios);
router.delete("/:id", authenticate, deleteAudio);

module.exports = router;