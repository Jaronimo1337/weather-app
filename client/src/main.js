import './assets/main.css'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 4000,
  position: 'top-right',
  theme: 'auto',
  type: 'default',
  dangerouslyHTMLString: true
})
createApp(App).mount('#app')