<template>
    <div class="product-item">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }} (3U)</h3>
      <p>{{ product.description }}</p>
      <p>€{{ product.price.toFixed(2) }}</p>
      <button @click="addToCart">Añadir</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductItem',
    props: {
      product: Object
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product)
      }
    }
  }
  </script>
  
  <style scoped>
  .product-item {
    border: 1px solid #ff9999;
    padding: 20px;
    text-align: center;
    background-color: #ffe5e5;
    border-radius: 5px;
  }
  
  .product-item img {
    width: 100px;
    height: auto;
  }
  
  h3 {
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
  