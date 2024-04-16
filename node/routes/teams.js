const express = require('express');

const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.post('/', teamsController.save);


module.exports = router;