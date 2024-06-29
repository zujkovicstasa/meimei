import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {createI18n} from 'vue-i18n';
import en from './locales/en.json'
import rs from './locales/rs.json'
import store from './store';

const messages = {
    en,
    rs

};

const i18n = createI18n({
    locale: store.state.language,
    messages
})

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount('#app');
