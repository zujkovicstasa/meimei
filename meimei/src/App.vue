<template>
  <div id="app">
    <Header_vue />
    <Navbar_vue />
    <router-view class="main-content" />
    <Footer_vue />
  </div>
</template>

<script>
import Header_vue from './components/Header.vue'
import Navbar_vue from './components/Navbar.vue'
import Footer_vue from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header_vue,
    Navbar_vue,
    Footer_vue
  }
}
</script>

<style>
/* Global styles */
body {
  font-family: "Roboto Mono", monospace;
  background-color: rgb(249, 213, 219);
  margin: 0;
  padding: 0;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the body covers the full viewport height */
}

#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  flex: 1; /* Fill remaining vertical space */
}


</style>
