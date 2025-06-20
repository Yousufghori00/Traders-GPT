import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import InlineSvg from 'vue-inline-svg'

const app = createApp(App)
app.use(PrimeVue);
app.component('inline-svg', InlineSvg)

app.use(router)

app.mount('#app')
