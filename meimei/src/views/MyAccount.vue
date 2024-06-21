<template>
    <div class="my-account">
      <h1>Moj nalog</h1>
      <Cart />
      <OrderHistory />
    </div>
  </template>
  
  <script>
  import Cart from '@/components/Cart.vue'
 // import OrderHistory from '@/components/OrderHistory.vue'
  
  export default {
    name: 'MyAccount_view',
    components: {
      Cart,
      //OrderHistory
    }
  }
  </script>
  
  <style scoped>
  .my-account {
    padding: 20px;
  }
  </style>
  