<template>
  <div class="home">
    <Cart />
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'

export default {
  name: 'Home_vue',
  components: {
    Cart
  }
}
</script>

<style scoped>
.home {
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(249, 213, 219);
  font-family: "Roboto Mono", monospace;
}
</style>
