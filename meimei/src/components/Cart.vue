<template>
  <div>
    <div class="cart">
      <h2>CART</h2>
      <div v-if="cartItems.length === 0 && !showMessage">Vaša korpa je prazna...</div>
      <div v-else-if="!showMessage">
        <div v-for="item in cartItems" :key="item.id" class="row cart-item">
          <div class="col-12 col-md-6 levi">{{ item.name }} - €{{ item.price }}</div>
          <div class="col-12 col-md-6 desni">{{ item.quantity }}
            &nbsp;
            <button class="plus" @click="incrementQuantity(item.id,0)">+</button>
            <button class="plus" @click="incrementQuantity(item.id,1)">-</button>
          </div>
        </div>
        <p>Total: €{{ totalPrice.toFixed(2) }}</p>
        <button @click="checkout">Checkout</button>
      </div>
      <div v-if="showMessage">Your order has been sent. Thank you!</div>
    </div>
    <div class="cart orders">
      <h2>ORDERS</h2>
      <div v-if="orderItems.length === 0">Niste jos nista narucili...</div>
      <div v-else>
        <div v-for="item in orderItems" :key="item.id" class="cart-item">
          {{ item.id }}
          <div v-for="car in item.list" :key="car.id" class="row">
            <div class="col-12 col-md-6 levi">{{ car.name }} - €{{ car.price }}</div>
            <div class="col-12 col-md-6 desni">{{ car.quantity }} </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
    
</template>
  
<script>
export default {
  name: 'Cart_vue',
  data() {
    return {
      cartItems: [],
      orderItems: [],
      showMessage: false
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
    }
  },
  methods: {
    checkout(){
      this.orderItems.push({
        id: this.orderItems.reduce((max, item) => (item.id > max ? item.id : max), 0)+1,
        list: this.cartItems
      });
      this.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      localStorage.setItem('orderItems', JSON.stringify(this.orderItems));
      this.showMessage=true;
    },
    fetchCartItems() {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      this.cartItems = storedCartItems || []; 
      const storedOrderItems = JSON.parse(localStorage.getItem('orderItems'));
      this.orderItems = storedOrderItems || []; 
      if(this.cartItems)this.showMessage=false;
    },
    incrementQuantity(itemId, br) {
      const foundItem = this.cartItems.find(item => item.id === itemId);
      if (foundItem) {
        if(br==0){
          foundItem.quantity++;
        }
        else{
          foundItem.quantity--;
          if(foundItem.quantity==0){
            this.cartItems = this.cartItems.filter(item => item.id !== itemId);
          }
        }
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    },
  },
  created() {
    this.fetchCartItems();
    this.showMessage=false;
  }
};
</script>
  
  <style scoped>
  .cart {
    width: 50%;
    padding: 20px;
    background-color: #ffe5e5;
    color: red;
    font-family: "Roboto Mono", monospace;
  }
  .levi{
    align-items: left;
    display: flex; justify-content: flex-start;
  }
  .desni{
    align-items: right;
    display: flex; justify-content: flex-end;
  }
  
  .cart-item {
    margin-bottom: 10px;
  }
  
  h2 {
    font-family: "Roboto Mono", monospace;
    color: red;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff4d4d;
  }
  .plus{
    padding: 0;
    border-radius: 0;
    background-color: #ffe5e5;
    color: red;
    padding-left: 5px;
    padding-right: 5px;
  }
  button.plus:hover{
    color: white;
  }
  </style>
  