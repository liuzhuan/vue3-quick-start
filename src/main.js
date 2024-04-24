import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.yourNumber = 9527
app.config.globalProperties.greeting = name =>
  `Hello, ${name}!`

app.mount('#app')
