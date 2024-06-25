<template>
  <div class="product-list">
      
    <div>
        
        <h3 v-if="category === 'predjela'">Appetizers</h3>
        <h3 v-else-if="category === 'glavna'">Main Courses</h3>
        <h3 v-else-if="category === 'dezerti'">Desserts</h3>
        <h3 v-else-if="category === 'kokteli'">Cocktails</h3>
        <h3 v-else-if="category === 'boba'">Bubble Tea</h3>
        <h3 v-else>Menu</h3>
        <div class="row pretraga" >
          <div class="col-12 col-md-6 levi">
            <input type="text" placeholder="Search" class="forma" v-model="searchTerm" />
          </div>
            
          <div class="col-12 col-md-6 desni">
            <label>Sort by:</label>
            <select v-model="sortBy" class="forma">
              <option value="name">Name</option>
              <option value="priceSmall">Price (Low to High)</option>
              <option value="nameAndPrice">Name&Price</option>
            </select>
          </div>
          
        </div>
        <div class="products">
          <div v-for="dish in sortedDishes" :key="dish.id" class="dish-item" >
            <img :src="dish.image" :alt="dish.name" />
            <br>
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
  props:{
    category: String,
    dishes: Object,
  },
  data() {
    return {
      sortBy: 'name',
      searchTerm: ''
    };
  },
  computed: {
    filteredDishes() {
      return this.dishes[this.category] || [];
    },
    sortedDishes() {
      let sorted = [...this.filteredDishes];
      if (this.sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === 'priceSmall') {
        sorted.sort((a, b) => a.priceSmall - b.priceSmall);
      }else if (this.sortBy === 'nameAndPrice') {
          sorted.sort((a, b) => {
            const nameComparison = a.name.localeCompare(b.name);
            if (nameComparison !== 0) {
              return nameComparison;
            }
            return a.priceSmall - b.priceSmall;
          });
      }
      if (this.searchTerm) {
        if (!isNaN(this.searchTerm)) {
          sorted = sorted.filter(dish =>
            dish.priceSmall.toString().includes(this.searchTerm)
          );
        } else {
          sorted = sorted.filter(dish =>
            dish.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
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
  .product-list{
    color: red;
  }
  .levi{
    align-items: left;
    display: flex; justify-content: flex-start;
  }
  .desni{
    align-items: right;
    display: flex; justify-content: flex-end;
  }
  .products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    font-family: "Roboto Mono", monospace;
  }
  h3 {
    padding-top: 10px;
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
  .forma, .forma:active, .forma:focus {
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    margin: 2px;
    color: red;
    border: 2px solid red;
    outline: 0;
    caret-color: red;
    vertical-align: middle;
    margin-bottom: 5px;
  }
  label{
    line-height: 35px;
  }
  .forma::placeholder {
    color: red;
  }
  .pretraga{
    padding-top:5px;
    padding-bottom: 30px;
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
    width: auto;
    height: 240px;
    padding-bottom: 30px;
  }
  
</style>
  