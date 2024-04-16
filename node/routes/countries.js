const express = require('express');

const countriesController = require('../controllers/countries.controller');
const router = express.Router();

router.post('/', countriesController.save);


module.exports = router;