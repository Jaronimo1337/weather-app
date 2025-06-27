import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL //from .env

export const getWeather = async (city) => { 
  const response = await axios.get(`${API_URL}/weather?city=${city}`) 
  return response.data
}