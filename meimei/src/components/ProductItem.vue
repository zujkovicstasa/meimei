<template>
<div class="okolo">
  <div v-if="dish" class="dish-details">
      <img :src="dish.image" :alt="dish.name" />
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <input type="radio" name="size" value="small" class="radio">
      <p>Small: €{{ dish.priceSmall.toFixed(2) }}</p>
      <input type="radio" name="size" value="large" class="radio">
      <p>Large: €{{ dish.priceLarge.toFixed(2) }}</p>
      <button @click="addToCart">Add to cart</button>
      <button @click="$emit('close')">Back to menu</button>
  </div>

    
</div>
    
</template>
  
<script>
  export default {
    props: {
      dish: Object
    },
    methods: {
      addToCart(){

      }
    }
};
</script>
  
<style scoped>
  .okolo{
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .dish-details {
    padding: 20px;
    text-align: center;
    background-color: rgb(249, 213, 219);
    font-family: "Roboto Mono", monospace;
  }
  
  .dish-details img {
    width: 150px;
    height: auto;
  }
  
  h3 {
    padding-top: 20px;
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
  input[type="radio"]{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid #ff4d4d;
    accent-color: rgb(249, 213, 219);
    outline: none;
    cursor: pointer;
  }
  input[type="radio"]:checked{
    accent-color: #ff4d4d;

  }
  
  
</style>
  