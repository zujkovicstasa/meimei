<template>
  <div class="home">
     <h2>Top 3 Customers' Favorites</h2>
     <div class="card-container">
      <div class="levi"><img src="/Hrana/zmaj.png" alt="" class="zmaj"></div>
        <div class="card" v-for="dish in topRatedDishes" :key="dish.id">
          <div class="dish-name">{{ dish.name }}</div>
          <img :src="dish.image" alt="dish image" class="dish-image">
          
          <div class="dish-rate">Customers rated: {{ (dish.rate / dish.num).toFixed(2) }}/5</div>
        </div>
        <div v-show="topRatedDishes.length === 0" class="gif"><img src="Hrana/giff.gif" alt="Animated GIF"></div>
        <div  class="desni"><img src="/Hrana/zmaj2.png" alt="" class="zmaj"></div>
      </div>
  </div>
</template>

<script>
import { dishes } from '@/data/dishes';
export default {
  name: 'Home_vue',
   data() {
    return {
      topRatedDishes: []
    };
  },methods: {
    getTopRatedDishes() {
      const storedRatings = JSON.parse(localStorage.getItem('rating')) || [];
      const allDishes = Object.values(dishes).flat();
      const ratedDishes = storedRatings.map(rating => {
        const dish = allDishes.find(d => d.id === rating.id);
        return dish ? { ...dish, ...rating } : null;
      }).filter(dish => dish !== null);

      ratedDishes.sort((a, b) => (b.rate / b.num) - (a.rate / a.num));
      this.topRatedDishes = ratedDishes.slice(0, 3);
    }
  },
  mounted() {
    this.getTopRatedDishes();
  }
};
</script>

<style scoped>
.home {
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(249, 213, 219);
  font-family: "Roboto Mono", monospace;
  color: #ff4d4d;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(249, 213, 219);
  color: #ff4d4d;
  font-family: "Roboto Mono", monospace;
  justify-content: center;
}

.card {
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  border: 3px solid #ff4d4d;
  color:#ff4d4d;
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  border-radius: 8px;
  text-align: center;
  background-color: rgb(249, 213, 219);
  max-width: 250px;
}

.dish-image {
  display: block;
  margin: auto;
  max-width: 100px;
  height: auto;
  border-radius: 4px;
}

.dish-name{
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
 h2 {
    padding-top: 10px;
    color: red;
    text-align: center;
  }
  .zmaj{
    max-width: 300px;
    height: auto;
  }
  .levi{
    display: flex;
    justify-content: flex-start;
    padding-right: 30px;
  }
  .desni{
    display: flex;
    justify-content: flex-end;
    padding-left: 30px;
  }
  .gif{
      display: block;
      margin: 0 auto; 
      margin-top: 30px; 
  }
</style>
