<template>
  <div class="menu">
    <router-view v-if="!selectedDish" :dishes="groups" @show-details="showDetails"></router-view>
    <ProductItem v-if="selectedDish" :dish="selectedDish" @close="backTomenu" />
    <div v-if="!showElement" class="menislika">
      <img :src="$t('menuData.placeholderImage')" alt="" class="slika">
    </div>
    <div v-show="!selectedDish" class="linkovi">
      <p v-for="item in menuItems" :key="item.name" @mouseover="setActiveItem(item.name)" @mouseleave="setActiveItem('')" class="link1">
        <router-link v-if="!item.subItems" :to="item.link" :class="{ active: activeItem === item.name }">
          <img :src="item.slika" :class="getImageClass(item.name)" alt="">
        </router-link>
      </p>
    </div>
    <div v-show="!selectedDish" class="dwnld">
      <a :href="$t('menuData.downloadLink')" download="menu.pdf">
        <button>{{ $t('downloadMenu') }}</button>
      </a>
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'; // Adjust path as needed

export default {
  name: 'Menu_view',
  components: {
    ProductItem,
  },
  data() {
    return {
      selectedDish: null,
      activeItem: null,
      category: null,
      groups: {
        predjela: [],
        glavna: [],
        dezerti: [],
        kokteli: [],
        boba: [],
      },
      menuItems: [
        { name: this.$t('menuData.predjela'), link: '/menu/predjela', slika: '/Hrana/predjelo.png' },
        { name: this.$t('menuData.glavna'), link: '/menu/glavna', slika: '/Hrana/glavno.png' },
        { name: this.$t('menuData.dezerti'), link: '/menu/dezerti', slika: '/Hrana/dezer.png' },
        { name: this.$t('menuData.kokteli'), link: '/menu/kokteli', slika: '/Hrana/koktel.png' },
        { name: this.$t('menuData.boba'), link: '/menu/boba', slika: '/Hrana/boba.png' },
      ],
    };
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
          this.category = category;
          return category;
        }
      }
      return '';
    },
    backTomenu() {
      let cat = this.getCategory(this.selectedDish);
      this.selectedDish = null;
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
  