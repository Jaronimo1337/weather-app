const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Cors are enabled for all routes

app.use(express.json());

// Routes
const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api', weatherRoutes);

module.exports = app;