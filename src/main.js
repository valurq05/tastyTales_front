import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { defaultConfig, plugin } from '@formkit/vue';
import App from './App.vue'
import router from './router'


const app = createApp(App)

window.axios = axios;
window.axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
window.axios.defaults.headers.common['Accept'] ='application/json'
window.axios.defaults.headers.common['Content-Type']='application/json'
window.axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

const pinia = createPinia()
pinia.use(({store}) =>{
store.router = markRaw(router)
});
pinia.use(createPersistedState)

app.use(plugin,defaultConfig)
app.use(pinia)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')