import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/flowbite-vue/dist/index.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";


const app = createApp(App)
AOS.init();
app.use(router)
 .component("v-select", vSelect);
app.mount('#app')
