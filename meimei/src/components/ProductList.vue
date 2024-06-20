<template>
    <div class="product-list">
      
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
          { id: 1, name: 'Jelo 1', price: 6.80, description: 'Opis Jela 1', image: '/Hrana/springrolls.PNG' },
          { id: 2, name: 'Jelo 2', price: 6.80, description: 'Opis Jela 2', image: '/Hrana/baobuns.PNG' },
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
  