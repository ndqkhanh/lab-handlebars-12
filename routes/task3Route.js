const express = require("express");
const task3Controller = require("../controllers/task3Controller");

const router = express.Router();
router.route("/").get(task3Controller.showDefault);

module.exports = router;
