<template>
    <div class="product-item">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }} (3U)</h3>
      <p>{{ product.description }}</p>
      <p>€{{ product.price.toFixed(2) }}</p>
      <button @click="addToCart">Dodaj</button>
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
    
    padding: 20px;
    text-align: center;
    background-color: rgb(249, 213, 219);
    width: 350px;
    height: 400px;
    font-family: "Roboto Mono", monospace;
  }
  
  .product-item img {
    width: 100px;
    height: auto;
  }
  
  h3 {
     
    color: red;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-style: bold;
  }
  
  button:hover {
    background-color: #ff4d4d;
  }
  </style>
  