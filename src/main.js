import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import TodoDeleteButton from './components/TodoDeleteButton.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
    console.log('global error handler', err)
}

app.component('TodoDeleteButton', TodoDeleteButton)

app.mount('#app')
