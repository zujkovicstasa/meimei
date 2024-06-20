<template>
    <div class="product-list">
      <h2>Dim Sum</h2>
      <div class="products">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductItem from './ProductItem.vue'
  
  export default {
    name: 'ProductList',
    components: {
      ProductItem
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Ha Gao de Gambas', price: 6.80, description: 'Pasta de trigo crujiente rellena de gambas.', image: 'path/to/image1.jpg' },
          { id: 2, name: 'Gyoza Cerdo y Verduras', price: 6.80, description: 'Pasta de trigo a la plancha relleno de carne de cerdo.', image: 'path/to/image2.jpg' },
          // Add more products here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .product-list {
    width: 70%;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  