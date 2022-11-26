const express = require("express");
const task2Controller = require("../controllers/task2Controller");

const router = express.Router();
router.route("/").get(task2Controller.showDefault);

module.exports = router;
