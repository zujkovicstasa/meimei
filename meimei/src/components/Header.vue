<template>
  <header class="header">
    <div class="logo box"> <router-link to="/">
      <img src="../assets/logo-removebg.png" alt="Site logo"></router-link>
      <span><router-link to="/" class="nesto">
      MEIMEI</router-link></span>
    </div>
    <div class="korpa box badge"  v-bind:value="this.itemCount"> <router-link to="/account"><img src="/cart.png" alt=""></router-link>
    
      
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header_vue',
  data() {
    return{
     itemCount: 0,
     cart: []
    }
  },
  methods: {
    getCartItems() {
      const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
      return cart;
    },
    calculateItemCount() {
      const cartItems = this.getCartItems();
      let count = 0;
      cartItems.forEach(item => {
        count += item.quantity;
      });
      return count;
    },
    updateItemCount() {
      this.itemCount = this.calculateItemCount();
    }
  },
  computed: { 
            itemsFromLocalStorage() { 
                return JSON.parse(localStorage.getItem('cartItems') || '[]'); 
            }
  },
  mounted() {
    this.updateItemCount();
  },
   watch: { 
            cart(){
                this.updateItemCount();
            }, 
        },
         created() { 
            this.cart = this.itemsFromLocalStorage; 
        }, 
}


</script>

<style scoped>
.header {
  background-color: rgb(249, 213, 219);
  padding: 20px;
  position: relative;
}
.nesto{
  font-family: "Roboto Mono", monospace, bold;
  font-size: 50px;
  color: red; 
  text-decoration: none;
}
.logo {
  display: flex;
  align-items: center;
  font-family: "Roboto Mono", monospace, bold;
  font-size: 50px;
  color: red; 
}

.logo img {
  height: 120px;
  margin-right: 10px;
}
 .box {
        float: left;
        width: 50%;
        box-sizing: border-box;
        padding: 20px;
    }

.logo span {
  display: flex;
  align-items: center;
}
.korpa{
    display: flex;
    justify-content: flex-end;
     height: auto;
     position:absolute;
     right: 0;
    bottom: 0;
}

.korpa img{
  width: 25px;
  height: auto;
  margin-top: auto;
}
.image-number {
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 10px; /* Adjust left position as needed */
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 5px 10px;
  border-radius: 5px;
}
.badge:after{
        content:attr(value);
        font-size:15px;
        color: red;
        border: 2px solid red;
        background-color: white;
        border-radius:50%;
        padding: 3px;
        position:relative;
        left:-8px;
        top:-10px;
        opacity:0.9;
        align-items: center;
    }
</style>
