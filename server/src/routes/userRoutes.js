const express = require("express");
const {register, login, getProfile, updateProfile, listUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile:id", getProfile);
router.put("/profile:id", updateProfile);
router.get("/users", listUsers);


module.exports = router;