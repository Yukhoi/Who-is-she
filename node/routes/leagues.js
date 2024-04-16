const express = require('express');

const leaguesController = require('../controllers/leagues.controller');
const router = express.Router();

router.post('/', leaguesController.save);


module.exports = router;