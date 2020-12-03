const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat.controller");

router.post("/create", chatController.createRoom);
router.post("/join", chatController.joinRoom);
router.post("/delete", chatController.deleteRoom);

module.exports = router;
