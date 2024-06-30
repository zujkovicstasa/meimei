<template>
    <div class="menu">
      
      <router-view v-if="!selectedDish" :dishes="groups" @show-details="showDetails"></router-view>
      
      <!--<ProductList v-if="currentGroup" :dishes="groups[currentGroup]" @show-details="showddetails" /> -->
      <ProductItem v-if="selectedDish" :dish="selectedDish" :category="getCategory(selectedDish)" @close="backTomenu" />
      <div v-if="!showElement" class="menislika">
          <img src="/Hrana/menislika.png" alt="" class="slika">
        </div>
      <div v-show="!selectedDish" class="linkovi">
        <p v-for="item in menuItems" 
          :key="item.name" 
          @mouseover="setActiveItem(item.name)" 
          @mouseleave="setActiveItem('')"
          class="link1"
        >
          <router-link v-if="!item.subItems" :to="item.link" :class="{ active: activeItem === item.name }">
        <img :src="item.slika" :class="getImageClass(item.name)" alt="">
      </router-link></p>
      </div>
      <div v-show="!selectedDish" class="dwnld">
        <a href="/Hrana/menu.pdf" download="menu.pdf">
        <button>{{$t("downloadMenu")}}</button>
        
      </a>
      </div>
      
      
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
        activeItem: null,
        category: null,
        groups: {
          predjela: [
            {
              id: 1, 
              name: 'Spring Rolls',
              priceSmall: 5.90, 
              priceLarge: 8.90,
              description: 'Crispy, golden-brown spring rolls packed with a mix of shredded cabbage, carrots, and glass noodles, wrapped in a delicate rice paper, served with a side of our signature sweet chili dipping sauce.', 
              image: '/Hrana/springrolls.PNG' 
            },
            { 
              id: 15,
              name: 'Pho Soup',
              priceSmall: 9.90,
              priceLarge: 12.90,
              description: 'A rich, aromatic broth simmered for hours, served with tender rice noodles, thinly sliced beef and garnished with fresh herbs, bean sprouts, lime, and chili peppers - a harmony of savory and refreshing flavors in every spoonful.',
              image: '/Hrana/phosoup.png'

            },
            {
              id: 16,
              name: 'Chili Savory Soup',
              priceSmall: 8.90,
              priceLarge: 11.90,
              description: 'Spicy and savory adventure in every bowl: robust broth infused with fiery chili peppers and aromatic spices, complemented by tofu, garnished with fresh herbs and served piping hot.',
              image: '/Hrana/kisela.png'
            }
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
                priceSmall: 10.90, 
                priceLarge: 13.90,
                description: 'Tender slices of Chinese barbecue pork (Char Siu), marinated and glazed with a savory-sweet sauce, served over a bed of jasmine rice, accompanied by fresh seasonal vegetables and a drizzle of our special house sauce.', 
                image: '/Hrana/bbqpork.PNG' 
            },
            { 
                id: 4, 
                name: 'Noodles',
                priceSmall: 11.70, 
                priceLarge: 14.70,
                description: 'Stir-fried noodles tossed with fresh green onions and rich, flavorful duck, expertly roasted to tender perfection.', 
                image: '/Hrana/noodles.PNG' 
            },
          ],
          dezerti: [
            { 
              id: 5, 
              name: 'Toffee Banana',
              priceSmall: 6.40, 
              priceLarge: 9.40,
              description: 'Sweet, caramelized bananas drizzled with a rich toffee sauce, served warm and paired with a scoop of creamy vanilla ice cream.', 
              image: '/Hrana/toffeebanana.PNG' 
            },
            { 
              id: 6, 
              name: 'Fried Ice Cream',
              priceSmall: 7.60, 
              priceLarge: 10.60,
              description: 'Vanilla ice cream delicately coated in a crunchy breadcrumb crust, drizzled with warm caramel sauce and crowned with a dollop of whipped cream.', 
              image: '/Hrana/friedicecream.PNG' 
            },
            { 
              id: 7, 
              name: 'Chocolate Ice Cream',
              priceSmall: 4.90, 
              priceLarge: 7.90,
              description: 'Dark chocolate ice cream infused with pieces of dark orange chocolate throughout, served with a slice of fresh orange for a refreshing citrus finish.', 
              image: '/Hrana/icecream.PNG' 
            },
          ],
          kokteli:[
            {
              id: 8,
              name: 'Meigroni',
              priceSmall: 10.90,
              priceLarge: 14.90,
              description: 'Our signature cocktail crafted with equal parts gin, sweet vermouth, and Campari, garnished with an orange twist for a bittersweet and sophisticated sip.',
              image: '/Hrana/IMG_4444.PNG'
            },
            { 
              id: 9, 
              name: 'Aperol Spritz',
              priceSmall: 8.90, 
              priceLarge: 12.90,
              description: 'A refreshing blend of Aperol, prosecco, and soda water, garnished with a slice of orange for a zesty twist.', 
              image: '/Hrana/IMG_4445.PNG' 
            },
            { 
              id: 10, 
              name: 'Cosmopolitan',
              priceSmall: 8.30, 
              priceLarge: 12.30,
              description: 'A classic cocktail featuring vodka, triple sec, cranberry juice, and a splash of fresh lime juice, shaken and strained into a chilled martini glass with a twist of orange peel.', 
              image: '/Hrana/IMG_4447.PNG' 
            },
            { 
              id: 11, 
              name: 'Mojito',
              priceSmall: 7.80, 
              priceLarge: 10.80,
              description: 'A refreshing Cuban cocktail made with white rum, fresh mint leaves, lime juice, sugar, and soda water, served over ice for a cool and invigorating drink.', 
              image: '/Hrana/IMG_4449.PNG' 
            },
          ],
          boba:[
            { 
              id: 12, 
              name: 'Ice caramel boba latte',
              priceSmall: 6.80, 
              priceLarge: 9.80,
              description: 'Our signature blend of rich caramel syrup, chilled milk, and espresso, topped with chewy tapioca pearls for a delightful twist on a classic latte experience.', 
              image: '/Hrana/IMG_4446.PNG' 
            },
            {
              id: 13,
              name: 'Matcha boba',
              priceSmall: 5.90,
              priceLarge: 8.90,
              description: 'A modern twist on traditional matcha tea infused with creamy milk and served with chewy tapioca pearls, offering a delightful combination of earthy matcha flavor and satisfying texture.',
              image: '/Hrana/IMG_4448.PNG'
            },
            {
              id: 14,
              name: 'Strawberry milkshake boba',
              priceSmall: 7.20,
              priceLarge: 10.20,
              description: 'A delightful fusion of creamy milkshake and refreshing bubble tea, featuring sweet strawberry flavor blended with milk and topped with chewy tapioca pearls for a unique and satisfying treat.',
              image: '/Hrana/IMG_4450.PNG'
            }
          ]
        },
        menuItems: [{ name: 'Predjela', link: '/menu/predjela', slika: '/Hrana/predjelo.png' },
            { name: 'Glavna jela', link: '/menu/glavna', slika: '/Hrana/glavno.png' },
            { name: 'Dezerti', link: '/menu/dezerti', slika: '/Hrana/dezer.png' },
            { name: 'Kokteli', link: '/menu/kokteli', slika: '/Hrana/koktel.png'},
            { name: 'Boba caj', link: '/menu/boba', slika: '/Hrana/boba.png'}],
          
      }
    },
    watch: {
      $route(to, from) {
        if (from.params.id && !to.params.id) {
          this.selectedDish = null;
        }
      },
    },
    methods: {
      showDetails(dish) {
      this.selectedDish = dish;
      this.$router.push(`/menu/${this.getCategory(dish)}/${dish.name}`);
      },
      getCategory(dish) {
        for (let category in this.groups) {
          if (this.groups[category].some(item => item.id === dish.id)) {
            this.category=category;
            return category;
          }
        }
        return '';
      },
      backTomenu(){
        let cat = this.getCategory(this.selectedDish);
        this.selectedDish=null;
        this.$router.push(`/menu/${cat}`);
      },
      setActiveItem(item) {
        this.activeItem = item;
      },
      getImageClass(itemName) {
        return {
          'custom-image-class': true,
          'active-image': this.activeItem === itemName,
        };
      },
    },
    computed: {
    showElement() {
      const currentPath = this.$route.path;
      return currentPath !== '/menu';
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
  .linkovi{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
  }
  .link1{
    margin: 30px;
  }
  .custom-image-class{
    width: 70px;
    height: auto;
  }
  .dwnld{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
  }
  .menislika{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;

  }
  .slika{
    width: 45%;
    height: auto;
  }


  </style>
  