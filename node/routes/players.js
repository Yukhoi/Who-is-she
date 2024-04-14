const express = require('express');

const playersController = require('../controllers/players.controller');

const router = express.Router();

router.get('/', playersController.index);

module.exports = router;