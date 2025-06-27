<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const emit = defineEmits(['search'])
const city = ref('')

const handleSearch = () => {
  const trimmedCity = city.value.trim() //removes whitespace

  if (!trimmedCity) { // if empty
    toast.warn('Please enter a city name!', {
      position: 'top-right',
      autoClose: 1000,
    })
    return
  }
  if (trimmedCity.length < 2) { // if too short
    toast.warn('City name must be at least 2 characters long!')
    return
  }

  const validPattern = /^[a-zA-Z\s\-'\.]+$/ //regex for valid characters
  if (!validPattern.test(trimmedCity)) {
    toast.warn('Only use letters and spaces!')
    return
  }
  emit('search', trimmedCity)
}
</script>

<template>
  <div class="mt-5">
    <input
      v-model="city"
      type="text"
      class="border border-gray-300 rounded-md p-2 md:w-[30rem]"
      placeholder="Enter city name"
      @keyup.enter="handleSearch"
    />
    <button
      type="button"
      class="mt-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl w-auto justify-self-center px-4 py-1 mx-auto rounded-lg block"
      @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>
