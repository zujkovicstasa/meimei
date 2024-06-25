<template>
<div class="okolo">
  <div v-if="dish" class="dish-details">
      <img :src="dish.image" :alt="dish.name" />
      <h3>{{ dish.name }}</h3>
      <p class="sredina">{{ dish.description }}</p>
      <p>Small: €{{ dish.priceSmall }}</p>
      <p>Large: €{{ dish.priceLarge }}</p>
      <div v-show="!showRate" class="card1" ref="starElems">
        <p class="ital">Our customers rated this product:</p>
        <span v-for="(star, index) in stars" 
          :key="index" 
          class="star1">★</span>
          <br>
      </div>
      <button @click="showAddToCartForm" v-if="!showForm && !showMessage && !showRate">Add to Cart</button>
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
        <button @click="rateUs">Rate</button>
        <button @click="$emit('close')">Back to menu</button>
      </div>
      <div v-show="showRate" ref="starElements" class="card">
        <span v-for="(star, index) in stars" 
          :key="index+1" 
          class="star" 
          @click="setRating(index+1)">★</span>
          <br>
          <p class="ital">Click on a wanted star to set rate.</p>
          <button @click="showAddToCartForm">Add to Cart</button>
          <button @click="ratingUs">Rate</button>
          <button @click="$emit('close')">Back to menu</button>
      </div>
      <div v-show="showMessage">
        Your order has been added to cart.
      </div>
      <button @click="rateUs" v-if="!showForm && !showRate">Rate</button>
      <button @click="$emit('close')" v-if="!showForm && !showRate">Back to menu</button>
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
        showRate: false,
        quantity: 1,
        portionSize: 'small',
        priceSmall: this.dish.priceSmall,
        priceLarge: this.dish.priceLarge,
        displayPrice: this.dish.priceSmall,
        stars: Array(5).fill(false),
        rating: 5,
      };
    },
    computed:{
      specificDish(){
        return this.dish[this.category][this.id] || null;
      }
    },
    methods: {
      setRating(ind) {
        this.rating = ind;
        const starElements = this.$refs.starElements.querySelectorAll('.star');
        for(let i=0;i<starElements.length;i++){
          if(i+1>this.rating)starElements[i].classList.add('gray');
          else{
            starElements[i].classList.remove('gray');
          }
        }
      },
      showAddToCartForm() {
        this.showForm = true;
        this.showMessage=false;
        this.showRate=false;
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
        const foundItem = cartItems.find(itemm => itemm.id === item.id);
        if(foundItem){
          foundItem.quantity+=item.quantity;
        }
        else{
          cartItems.push(item);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.quantity = 1;
        this.portionSize = 'small';
        this.displayPrice = this.dish.priceSmall;
        this.showForm = false;
        this.showMessage = true;
        this.showRate=false;
        
      },
      rateUs(){
        this.showRate =true;
        this.showForm=false;
        this.showMessage=false;
      },
      updateStar(){
        let storedRating = JSON.parse(localStorage.getItem('rating')) || [];
        const foundItem = storedRating.find(itemm => itemm.id === this.dish.id);
          if(foundItem){
            this.rating=Math.floor(foundItem.rate/foundItem.num);
          }
          else this.rating = 5;
        const starElems = this.$refs.starElems.querySelectorAll('.star1');
        for (let i = 0; i < starElems.length; i++) {
          if (i+1 > this.rating) {
            starElems[i].classList.add('gray');
          } else {
            starElems[i].classList.remove('gray');
          }
        }
        const starElements = this.$refs.starElements.querySelectorAll('.star');
        for(let i=0;i<starElements.length;i++){
          if(i+1>this.rating)starElements[i].classList.add('gray');
          else{
            starElements[i].classList.remove('gray');
          }
        }
      },
      
      ratingUs(){
        const rate = {
          id: this.dish.id,
          rate: this.rating,
          num: 1,
        };
        
        let storedRating = JSON.parse(localStorage.getItem('rating')) || [];
        const foundItem = storedRating.find(itemm => itemm.id === rate.id);
        if(foundItem){
          foundItem.num++;
          foundItem.rate += this.rating;
        }
        else{
          storedRating.push(rate);
        }
        localStorage.setItem('rating', JSON.stringify(storedRating));
        this.showRate=false;
        this.updateStar();
      },
      
    },
    mounted() {
        let storedRating = JSON.parse(localStorage.getItem('rating')) || [];
        const foundItem = storedRating.find(itemm => itemm.id === this.dish.id);
          if(foundItem){
            this.rating=Math.floor(foundItem.rate/foundItem.num);
          }
          else this.rating = 5;
        const starElems = this.$refs.starElems.querySelectorAll('.star1');
        for (let i = 0; i < starElems.length; i++) {
          if (i+1 > this.rating) {
            starElems[i].classList.add('gray');
          } else {
            starElems[i].classList.remove('gray');
          }
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
    color: red;
    
  }
  
  .dish-details img {
    width: 150px;
    height: auto;
  }
  .card {
    display: inline;
    background-color: rgb(249, 213, 219);
    outline: 0;
    border: 0;
  }
  .card1 {
    display: inline;
    background-color: rgb(249, 213, 219);
    outline: 0;
    border: 0;
  }
  
  .star {
    font-size: 2rem;
    color: rgb(236, 193, 85);
    margin-right: 5px;
    cursor: pointer;
  }
  .star1 {
    font-size: 2rem;
    color: rgb(236, 193, 85);
    margin-right: 5px;
    cursor: pointer;
  }
  .gray{
    color: whitesmoke;
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
    margin: 2px;
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
  .ital{
    font-style: italic;
    color: red;
    font-family: cursive;
  }
  label{
    color: #ff4d4d;
    font-weight: bold;
    padding: 5px;
  }
  .sredina{
    width: 60%;
    margin: 0 auto;
    text-align: center;
    
  }

  
  
</style>
  