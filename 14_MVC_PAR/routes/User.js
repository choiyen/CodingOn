const express = require("express");
const controller = require("../controller/CUser");
const router = express.Router();

// GET /user
router.get("/", controller.user);

module.exports = router;
