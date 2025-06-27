const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City name is required" }); // if empty
    }

    const api = process.env.API_KEY; // from .env
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`; // didnt hide in env, its public info

    const response = await axios.get(url);
    const weatherData = response.data; // set response data

    const result = {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
    };

    res.json(result);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ 
        error: "City not found" 
    });
    }
    res.status(500).json({ 
        error: "Failed to fetch weather data" });
  }
};

module.exports = {
  getWeather,
};
