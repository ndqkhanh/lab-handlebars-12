const express = require('express');
const task4Controller = require('../controllers/task4Controller');

const router = express.Router();
router.route('/').get(task4Controller.renderList);
router.route('/:name').get(task4Controller.renderDetails);

module.exports = router;
