<template>
    <div class="cart">
      <h2>Cesta</h2>
      <div v-if="cartItems.length === 0">No hay productos en la cesta.</div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p>{{ item.name }} - €{{ item.price.toFixed(2) }}</p>
        </div>
        <p>Total: €{{ totalPrice.toFixed(2) }}</p>
        <button @click="checkout">Finalizar Compra</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart_vue',
    data() {
      return {
        cartItems: [] // This would normally be managed in a Vuex store or similar
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price, 0)
      }
    },
    methods: {
      checkout() {
        // Implement checkout logic
        alert('Compra finalizada')
      }
    }
  }
  </script>
  
  <style scoped>
  .cart {
    width: 25%;
    border: 1px solid #ff9999;
    padding: 20px;
    background-color: #ffe5e5;
    border-radius: 5px;
  }
  
  .cart-item {
    margin-bottom: 10px;
  }
  
  h2 {
    font-family: 'Arial, sans-serif'; /* Update with your specific font if needed */
    color: #ff6666;
  }
  
  button {
    background-color: #ff6666;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff4d4d;
  }
  </style>
  