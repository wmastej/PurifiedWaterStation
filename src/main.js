import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';
import store from './store';

// Import Tailwind CSS
import './assets/main.css'

// Import PrimeIcons
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(store);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount("#app");