import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import i18n from './i18n';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount('#app');
