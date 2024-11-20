import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js";
import router from './router';
import { defaultConfig, plugin } from '@formkit/vue';
import {createPinia} from 'pinia'


const app = createApp(App)
app.use(router)
app.use(plugin,defaultConfig)
app.use(createPinia())

app.mount('#app')
