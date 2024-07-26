const express = require("express");
const {register, login, getProfile, updateProfile, listUsers } = require("../controllers/userController");
const authenticate = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile:id", authenticate, getProfile);
router.put("/profile:id", authenticate, updateProfile);
router.get("/", authenticate, listUsers);


module.exports = router;