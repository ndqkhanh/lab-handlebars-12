const express = require("express");
const task1Controller = require("../controllers/task1Controller");

const router = express.Router();
router.route("/").get(task1Controller.showDefault);
router.route("/:title").get(task1Controller.showDefault);

module.exports = router;
