const express = require('express');

const playersController = require('../controllers/players.controller');

const router = express.Router();

router.post('/', playersController.save);
router.get('/:id', playersController.findPlayerById);
router.get('/', playersController.findAllPlayers);
router.get('/search/:partialName', playersController.findPlayersByPartialName);

module.exports = router;