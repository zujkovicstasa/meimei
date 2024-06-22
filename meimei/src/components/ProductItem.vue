<template>
<div class="okolo">
  <div v-if="dish" class="dish-details">
      <img :src="dish.image" :alt="dish.name" />
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <p>Small: €{{ dish.priceSmall }}</p>
      <p>Large: €{{ dish.priceLarge }}</p>
      <button @click="showAddToCartForm" v-if="!showForm && !showMessage" >Add to Cart</button>
      <div v-show="showForm">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" class="forma" v-model="quantity" min="1" required>
        <br>
        <label for="portionSize">Portion Size:</label>
        <select id="portionSize" class="forma" v-model="portionSize" @change="updatePrice">
          <option value="small">Small</option>
          <option value="large">Large</option>
        </select>
        <br>
        <button @click="addToCart">Add to Cart</button>
        <button @click="$emit('close')">Back to menu</button>
      </div>
      <div v-show="showMessage">
        Your order has been added to cart.
      </div>
      <button @click="$emit('close')" v-if="!showForm">Back to menu</button>
  </div>

    
</div>
    
</template>
  
<script>
  export default {
    props: {
      dish: Object
    },
    data() {
      return {
        showForm: false,
        showMessage: false,
        quantity: 1,
        portionSize: 'small',
        priceSmall: this.dish.priceSmall,
        priceLarge: this.dish.priceLarge,
        displayPrice: this.dish.priceSmall
      };
    },
    computed:{
      specificDish(){
        return this.dish[this.category][this.id] || null;
      }
    },
    methods: {
      showAddToCartForm() {
        this.showForm = true;
      },
       updatePrice() {
        switch (this.portionSize) {
          case 'small':
            this.displayPrice = this.dish.priceSmall;
            break;
          case 'large':
            this.displayPrice = this.dish.priceLarge;
            break;
          default:
            this.displayPrice = this.dish.priceSmall;
        }
      },
      addToCart() {
        const item = {
          id: this.dish.id,
          name: this.dish.name,
          quantity: this.quantity,
          portionSize: this.portionSize,
          price: this.displayPrice
        };
        
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.quantity = 1;
        this.portionSize = 'small';
        this.displayPrice = this.dish.priceSmall;
        this.showForm = false;
        this.showMessage = true;
        
      },
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
  .forma {
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
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
  