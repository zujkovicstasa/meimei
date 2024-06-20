<template>
  <div id="app">
    <Header_vue />
    <Navbar_vue />
    <div class="main-content">
      <ProductList />
      <Cart_vue />
    </div>
    <Footer_vue />
  </div>
</template>

<script>
import Header_vue from './components/Header.vue'
import ProductList from './components/ProductList.vue'
import Cart_vue from './components/Cart.vue'
import Footer_vue from './components/Footer.vue'
import Navbar_Vue from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Header_vue,
    Navbar_vue,
    ProductList,
    Cart_vue,
    Footer_vue
  }
}
</script>

<style>
/* Global styles */
body {
  font-family: 'Arial, sans-serif';
  background-color: #ffefef;
  margin: 0;
  padding: 0;
  color: #333;
}

.main-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffefef;
}
</style>
