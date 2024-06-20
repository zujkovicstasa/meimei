<template>
  <div class="home">
    <ProductList />
    <Cart />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'

export default {
  name: 'Home_vue',
  components: {
    ProductList,
    Cart
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(249, 213, 219);
  font-family: "Roboto Mono", monospace;
}
</style>
