<template>
    <div class="menu">
      
      <router-view :dishes="groups" @show-details="showDetails"></router-view>
      
      <!--<ProductList v-if="currentGroup" :dishes="groups[currentGroup]" @show-details="showddetails" /> -->
      <ProductItem v-if="selectedDish" :dish="selectedDish" @close="backTomenu" />
    </div>
</template>
  
  <script>
 //import ProductList from '../components/ProductList.vue'
 import ProductItem from '../components/ProductItem.vue'

  export default {
    name: 'Menu_view',
    components:{
      //ProductList,
      ProductItem
    },
    data() {
      return {
        //currentGroup: 'predjelo',
        selectedDish: null,
        groups: {
          predjela: [
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
            { 
              id: 6, 
              name: 'Fried Ice Cream',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'Vanilla ice cream delicately coated in a crunchy breadcrumb crust, drizzled with warm caramel sauce and crowned with a dollop of whipped cream.', 
              image: '/Hrana/friedicecream.PNG' 
            },
            { 
              id: 7, 
              name: 'Chocolate Ice Cream',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'Dark chocolate ice cream infused with pieces of dark orange chocolate throughout, served with a slice of fresh orange for a refreshing citrus finish.', 
              image: '/Hrana/icecream.PNG' 
            },
          ],
          kokteli:[
            {
              id: 8,
              name: 'Meigroni',
              priceSmall: 12.00,
              priceLarge: 15.80,
              description: 'Our signature cocktail crafted with equal parts gin, sweet vermouth, and Campari, garnished with an orange twist for a bittersweet and sophisticated sip.',
              image: '/Hrana/IMG_4444.PNG'
            },
            { 
              id: 9, 
              name: 'Aperol Spritz',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'A refreshing blend of Aperol, prosecco, and soda water, garnished with a slice of orange for a zesty twist.', 
              image: '/Hrana/IMG_4445.PNG' 
            },
            { 
              id: 10, 
              name: 'Cosmopolitan',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'A classic cocktail featuring vodka, triple sec, cranberry juice, and a splash of fresh lime juice, shaken and strained into a chilled martini glass with a twist of orange peel.', 
              image: '/Hrana/IMG_4447.PNG' 
            },
            { 
              id: 11, 
              name: 'Mojito',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'A refreshing Cuban cocktail made with white rum, fresh mint leaves, lime juice, sugar, and soda water, served over ice for a cool and invigorating drink.', 
              image: '/Hrana/IMG_4449.PNG' 
            },
          ],
          boba:[
            { 
              id: 12, 
              name: 'Ice caramel boba latte',
              priceSmall: 6.80, 
              priceLarge: 8.80,
              description: 'Our signature blend of rich caramel syrup, chilled milk, and espresso, topped with chewy tapioca pearls for a delightful twist on a classic latte experience.', 
              image: '/Hrana/IMG_4446.PNG' 
            },
            {
              id: 13,
              name: 'Matcha boba',
              priceSmall: 7.00,
              priceLarge: 9.20,
              description: 'A modern twist on traditional matcha tea infused with creamy milk and served with chewy tapioca pearls, offering a delightful combination of earthy matcha flavor and satisfying texture.',
              image: '/Hrana/IMG_4448.PNG'
            },
            {
              id: 14,
              name: 'Strawberry milkshake boba',
              priceSmall: 7.00,
              priceLarge: 9.20,
              description: 'A delightful fusion of creamy milkshake and refreshing bubble tea, featuring sweet strawberry flavor blended with milk and topped with chewy tapioca pearls for a unique and satisfying treat.',
              image: '/Hrana/IMG_4450.PNG'
            }
          ]
        }
      };
    },
    watch: {
      $route(to, from) {
        if (from.params.id && !to.params.id) {
          this.selectedDish = null;
        }
      }
    },
    methods: {
      showDetails(dish) {
      this.selectedDish = dish;
      this.$router.push(`/menu/${this.getCategory(dish)}/${dish.id}`);
      },
      getCategory(dish) {
        for (let category in this.groups) {
          if (this.groups[category].some(item => item.id === dish.id)) {
            return category;
          }
        }
        return '';
      },
      backTomenu(){
        let cat = this.getCategory(this.selectedDish);
        this.selectedDish=null;
        this.$router.push(`/menu/${cat}`);
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
  