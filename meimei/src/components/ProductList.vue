<template>
  <div class="product-list">
      
    <div>
        <h3>{{ currentGroup }}</h3>
        <div>
          <label>Sort by:</label>
          <select v-model="sortBy">
            <option value="name">Name</option>
            <option value="priceSmall">Price (Low to High)</option>
          </select>
          <div>
            <input type="text" placeholder="Search dishes" v-model="searchTerm" />
          </div>
          
        </div>
        <div class="products">
          <div v-for="dish in sortedDishes" :key="dish.id" class="dish-item" >
            <img :src="dish.image" :alt="dish.name" />
            <h4>{{ dish.name }}</h4>
            <p>Price: €{{ dish.priceSmall.toFixed(2) }}</p>
            <button @click="showDetails(dish)">Show more</button>
            
          </div>
        </div>
        
    </div>
  </div>
</template>
  
<script>
  export default {
  props: {
    dishes: Array
  },
  data() {
    return {
      sortBy: 'name',
      searchTerm: ''
    };
  },
  computed: {
    sortedDishes() {
      let sorted = [...this.dishes];
      if (this.sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === 'priceSmall') {
        sorted.sort((a, b) => a.priceSmall - b.priceSmall);
      }
      if (this.searchTerm) {
        sorted = sorted.filter(dish =>
          dish.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      return sorted;
    }
  },
  methods: {
    showDetails(dish) {
      this.$emit('show-details', dish);
    }
  }
  
};
</script>
  
<style scoped>

  .products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    font-family: "Roboto Mono", monospace;
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
  
  .dish-item {
    
    padding: 20px;
    text-align: center;
    background-color: rgb(249, 213, 219);
    width: 350px;
    height: auto;
    font-family: "Roboto Mono", monospace;
    border: 1px solid red;
  }
  
  .dish-item img {
    width: 150px;
    height: auto;
  }
  
</style>
  