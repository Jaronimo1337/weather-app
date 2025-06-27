<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'
import { getWeather } from './helpers/getWeatherApi.js'
import { toast } from 'vue3-toastify' //toasties

// fancy useState, for storing data
const weatherData = ref(null)
const loading = ref(false)
const error = ref('')

// search
const handleSearch = async (cityName) => {
  loading.value = true
  error.value = ''
  weatherData.value = null

  try {
    ;(weatherData.value = await getWeather(cityName)), //from helper
      toast.success('Success!', {
        position: 'top-right',
        autoClose: 1000,
      })
  } catch (err) {
    if (err.response?.status === 404) { //404
      toast.error('City not found!', {
        position: 'top-right',
        autoClose: 1000,
      })
    } else if (err.response?.status >= 400) { //400
      toast.error('Bad request!', {
        position: 'top-right',
        autoClose: 1000,
      })
    } else {
      toast.error('Something went wrong', {
        position: 'top-right',
        autoClose: 1000,
      })
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="app">
    <div
      class="header drop-shadow container h-100 text-center flex flex-col bg-gradient-to-br from-green-200 to-blue-400 rounded-xl p-5 animate-fade-up animate-once animate-delay-100 animate-ease-linear mt-10 mx-auto max-w-4xl"
    >
      <h1 class="text-2xl font-bold text-gray-900">Weather App</h1>
      <SearchBar @search="handleSearch" />

      <!--if fetching data show this-->
      <div v-if="loading" class="mt-6">
        <p class="text-gray-700">Loading weather data...</p>
      </div>

      <!-- if errors show this -->
      <div
        v-if="error"
        class="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
      >
        {{ error }}
      </div>

      <!-- weather data -->
      <WeatherCard v-if="weatherData" v-bind:weather-data="weatherData" /> 
    </div>
  </div>
</template>

<style>
body {
  background-color: #e3fff4;
}
</style>
