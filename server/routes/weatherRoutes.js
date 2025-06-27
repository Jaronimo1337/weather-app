const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const { validateWeatherQuery } = require('../middleware/validate');


router.get('/weather',validateWeatherQuery, weatherController.getWeather);

module.exports = router;