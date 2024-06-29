// i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en';
import rs from './locales/rs';
import store from './store'; // Import Vuex store

const messages = {
  EN: en,
  RS: rs
};

const i18n = createI18n({
  locale: store.state.language, // Set locale from Vuex store
  messages
});

export default i18n;
