const express = require("express");
const {addComment, getComments, deleteComment } = require("../controllers/commentController");

const router = express.Router();

router.post("/:audioId", addComment);
router.get("/:audioId", getComments);
router.delete("/:id", deleteComment);

module.exports = router;