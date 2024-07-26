const express = require("express");
const {startStream, stopStream, getStream, getUserStreams } = require("../controllers/streamController");
const authenticate = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/start", authenticate, startStream);
router.post("/stop",authenticate, stopStream);
router.get("/:id", getStream);
router.get("/user/:userid", authenticate, getUserStreams);

module.exports = router;