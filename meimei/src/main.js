import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { createI18n } from 'vue-i18n'
import EN from './locale/en.js'
import SR from './locale/sr.js'

const i18n = createI18n({
    locale: 'EN',
    fallbackLocale:'EN',
    messages:{
        EN:EN,
        SR:SR,
    }
})

createApp(App).use(router).use(i18n).mount('#app')
