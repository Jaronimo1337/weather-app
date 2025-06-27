<script setup>
defineProps({ // props from parent (app)
  weatherData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="weather-card bg-white rounded-xl p-6 mt-6 shadow-lg animate-fade-out">
    <h2 class="text-xl font-bold text-gray-800 mb-4">
      {{ weatherData.city }} {{ weatherData.country }}
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="text-center">
        <p class="text-3xl font-bold text-blue-600">
          {{ Math.round(weatherData.temperature) }}°C
        </p>
        <p class="text-gray-600">Temperature</p>
      </div>
      
      <div class="text-center">
        <p class="text-xl font-semibold text-green-600">
          {{ weatherData.condition }}
        </p>
        <p class="text-gray-600 text-sm">{{ weatherData.description }}</p>
      </div>
      
      <div class="text-center">
        <p class="text-xl font-semibold text-purple-600">
          {{ weatherData.humidity }}%
        </p>
        <p class="text-gray-600">Humidity</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.weather-card {
    background-image: url('../../public/weather.jpg');
    background-size: cover;
    background-position: center;
}
</style>