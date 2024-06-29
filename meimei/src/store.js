// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    language: localStorage.getItem('language') || 'EN' // Default language
  },
  mutations: {
    setLanguage(state, lang) {
      state.language = lang;
      localStorage.setItem('language', lang); // Save language preference to localStorage
    }
  },
  actions: {
    updateLanguage({ commit }, lang) {
      commit('setLanguage', lang);
    }
  },
  getters: {
    currentLanguage: state => state.language
  }
});
