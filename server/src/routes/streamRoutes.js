const express = require("express");
const {startStream, stopStream, getStream, getUserStreams } = require("../controllers/streamController");

const router = express.Router();

router.post("/start", startStream);
router.post("/stop", stopStream);
router.get("/:id", getStream);
router.get("/user/:userid", getUserStreams);

module.exports = router;