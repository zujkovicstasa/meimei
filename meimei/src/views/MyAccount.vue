<template>
    <div class="my-account">
      <Cart />
    </div>
  </template>
  
  <script>
  import Cart from '@/components/Cart.vue'
  
  export default {
    name: 'MyAccount_view',
    components: {
      Cart,
    }
  }
  </script>
  
  <style scoped>
  .my-account {
    padding: 20px;
  }
  </style>
  