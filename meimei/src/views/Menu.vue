<template>
    <div class="menu">
      <h1>Meni</h1>
      <div>
        <button @click="currentGroup = 'predjelo';selectedDish=null;">Appetizers</button>
        <button @click="currentGroup = 'glavna';selectedDish=null;">Main Courses</button>
        <button @click="currentGroup = 'dezerti';selectedDish=null;">Desserts</button>
        <button @click="currentGroup = 'kokteli';selectedDish=null;">Cocktails</button>
        <button @click="currentGroup = 'boba';selectedDish=null;">Bubble tea</button>
      </div>
      <ProductList v-if="currentGroup" :dishes="groups[currentGroup]" @show-details="showddetails" />
      <ProductItem v-if="selectedDish" :dish="selectedDish" @close="selectedDish = null; currentGroup='predjelo'" />
    </div>
</template>
  
  <script>
 import ProductList from '../components/ProductList.vue'
 import ProductItem from '../components/ProductItem.vue'

  export default {
    name: 'Menu_view',
    components:{
      ProductList,
      ProductItem
    },
    data() {
      return {
        currentGroup: 'predjelo',
        selectedDish: null,
        groups: {
          predjelo: [
            {
              id: 1, 
              name: 'Spring rolls',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'Crispy, golden-brown spring rolls packed with a mix of shredded cabbage, carrots, and glass noodles, wrapped in a delicate rice paper, served with a side of our signature sweet chili dipping sauce', 
              image: '/Hrana/springrolls.PNG' 
            },
          ],
          glavna: [
            { 
                id: 2, 
                name: 'Bao Buns',
                priceSmall: 6.80, 
                priceLarge: 8.80,
                description: 'Soft, fluffy, steamed buns filled with tender, marinated pork belly paired with fresh, crunchy cucumbers and a hint of hoisin sauce.', 
                image: '/Hrana/baobuns.PNG' 
            },
            { 
                id: 3, 
                name: 'BBQ Pork',
                priceSmall: 6.80, 
                priceLarge: 8.80,
                description: 'Tender slices of Chinese barbecue pork (Char Siu), marinated and glazed with a savory-sweet sauce. Served over a bed of steamed jasmine rice, accompanied by fresh seasonal vegetables and a drizzle of our special house sauce.', 
                image: '/Hrana/bbqpork.PNG' 
            },
            { 
                id: 4, 
                name: 'Noodles',
                priceSmall: 0.80, 
                priceLarge: 9.80,
                description: 'Stir-fried noodles tossed with fresh green onions and rich, flavorful duck, expertly roasted to tender perfection.', 
                image: '/Hrana/noodles.PNG' 
            },
          ],
          dezerti: [
            { 
              id: 5, 
              name: 'Toffee Banana',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'Sweet, caramelized bananas drizzled with a rich toffee sauce, served warm and paired with a scoop of creamy vanilla ice cream.', 
              image: '/Hrana/toffeebanana.PNG' 
            },
          ],
          kokteli:[
            {
              id: 6,
              name: 'Meigroni',
              priceSmall: 12.00,
              priceLarge: 15.80,
              description: 'Our signature cocktail',
              image: '/Hrana/IMG_4444.PNG'
            }
          ],
          boba:[
            {
              id: 7,
              name: 'Matcha boba',
              priceSmall: 7.00,
              priceLarge: 9.20,
              description: 'Boba tea with matcha and milk',
              image: '/Hrana/IMG_4448.PNG'
            }
          ]
        }
      };
    },
    methods: {
      showddetails(dish) {
        this.selectedDish = dish;
        this.currentGroup=null;
      }
    }
  };

  
  
  </script>
  
  <style scoped>
  .menu {
    padding: 20px;
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
  