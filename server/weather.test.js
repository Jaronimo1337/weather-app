const request = require('supertest');
const express = require('express');

const app = express();

app.get('/weather', (req, res) => { // mockup route
  const city = req.query.city;
  
  if (!city || city.trim() === '') { // if empty
    return res.status(400).json({ error: 'City name is required' });
  }
  
  res.json({ // mockup test data
    city: city,
    temperature: 25,
    condition: 'Sunny'
  });
});

test('should get weather data when city is provided', async () => { // test city
  const response = await request(app)
    .get('/weather?city=London')
    .expect(200);
    
  expect(response.body.city).toBe('London');
  expect(response.body.temperature).toBe(25);
});

test('should return error when city is empty', async () => { //test empty city
  const response = await request(app)
    .get('/weather?city=')
    .expect(400);
    
  expect(response.body.error).toBe('City name is required');
});

test('should return error when no city provided', async () => { // test no city
  const response = await request(app)
    .get('/weather')
    .expect(400);
    
  expect(response.body.error).toBe('City name is required');
});