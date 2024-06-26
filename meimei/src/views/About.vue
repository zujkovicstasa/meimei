<template>
  <div class="about">
    <section class="about-section">
      <div class="row">
        <div class="image">
          <img src="@/assets/images/about-img.png" alt="About Us">
        </div>
        <div class="content">
          <h3>Why Choose Us?</h3>
          <p>Discover the essence of Chinese cuisine at MEIMEI. We use the finest ingredients to create authentic flavors that bring China to your table. Our friendly staff ensures every visit is met with warmth and efficiency. Explore a diverse menu offering traditional favorites and innovative dishes.</p>
          <router-link to="/menu" class="btn">Our Menu</router-link>
        </div>
      </div>
    </section>

    <section class="steps">
      <h1 class="title">3 SIMPLE STEPS</h1>
      <div class="box-container">
        <div class="box">
          <img src="@/assets/images/step-1.png" alt="Step 1">
          <h3>Choose your dish</h3>
          <p>We offer a diverse menu, whether you're craving traditional flavors or exploring something new, our dishes are prepared with the freshest ingredients to satisfy your taste buds.</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-2.png" alt="Step 2">
          <h3>Fast delivery</h3>
          <p>We understand the importance of timely service. Enjoy swift and reliable delivery so your food arrives fresh and ready to enjoy, whether you're dining in or ordering takeout.</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-3.png" alt="Step 3">
          <h3>Enjoy your food!</h3>
          <p>Indulge in a delightful dining experience at the comfort of your own home. From the first bite to the last, savor the authentic flavors and impeccable quality that define our cuisine.</p>
        </div>
      </div>
    </section>

    <section class="reviews">
      <h1 class="title">GUEST REVIEWS</h1>
      <div class="reviews-container">
        <div class="review">
          <img src="../assets/images/pic-1.png" alt="">
          <p>MEIMEI is a gem! The flavors in every dish are exceptional, truly transporting me to China with each bite. The staff's warm hospitality made our dining experience unforgettable. Can't wait to visit again!</p>
          <div class="stars">
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
          </div>
          <h3>Marko Marković</h3>
        </div>
        <div class="review">
          <img src="../assets/images/pic-2.png" alt="">
          <p>Absolutely loved my meal at MEIMEI! The Bao Buns were heavenly – soft, flavorful, and perfectly balanced with tender pork belly. A must-visit for anyone craving authentic Chinese cuisine in town.</p>
          <div class="stars">
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star-half-alt star-gold"></i>
          </div>
          <h3>Milica Simić</h3>
        </div>
        <div class="review">
          <img src="../assets/images/pic-3.png" alt="">
          <p>What a delightful discovery! The Toffee Banana dessert was the perfect ending to a fantastic meal. Each dish showcased the chef's mastery in blending traditional flavors with modern twists. Highly recommend!</p>
          <div class="stars">
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
          </div>
          <h3>Petar Petrović</h3>
        </div>
      </div>
    </section>
    <section class="map-section">
      <h1 class="title">Visit Us</h1>
      <div class="map-container">
        <!-- Google Maps iframe -->
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=Belgrade&key=AIzaSyDfIqMI_zkd0T60fUEGzty83mZKhjOieq8"
        ></iframe>
      </div>
    </section>

    <!-- Spacer to push footer to the bottom -->
    <div class="spacer"></div>
  </div>
</template>

<script>
//import { onMounted } from 'vue';
//import Swiper from 'swiper/bundle';
//import 'swiper/swiper-bundle.min.css';

export default {
  name: 'About_vue',
  // setup() {
  //   onMounted(() => {
  //     var swiper = new Swiper(".reviews-slider", {
  //       loop: true,
  //       grabCursor: true,
  //       spaceBetween: 20,
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //       breakpoints: {
  //         550: {
  //           slidesPerView: 1,
  //         },
  //         768: {
  //           slidesPerView: 2,
  //         },
  //         1024: {
  //           slidesPerView: 3,
  //         },
  //       },
  //     });
  //   });
  // },
};
</script>
<style scoped>
.about {
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full viewport height */
}

.about .row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.about .row .image {
  flex: 1 1 40%;
}

.about .row .image img {
  width: 70%;
  height: auto;
  object-fit: cover;
  
}

.about .row .content {
  flex: 1 1 50%;
  text-align: center;
}

.about .row .content h3 {
  font-size: 2.5rem;
  text-transform: capitalize;
  color: red; /* Your black color */
}

.about .row .content p {
  padding: 1rem 0;
  line-height: 1.8;
  font-size: 20px;
  padding-right: 40px;
  padding-top: 20px;
  color: red; /* Your light color */
}

.about-section .btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.about-section .btn:hover {
  background-color: darkred;
}

.steps .title,
.reviews .title {
  text-align: center;
  margin-bottom: 20px;
  color: red;
}

.steps {
  margin-top: 40px;
}

.steps .box-container {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
  align-items: flex-start;
}

.steps .box-container .box {
  text-align: center;
  padding: 2rem;
  border: 2px solid red; /* Border around each step */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.steps .box-container .box img {
  height: 18rem;
  margin-bottom: 5px;
  width: 100%;
  object-fit: contain;
}

.steps .box-container .box h3 {
  font-size: 25px;
  color: red;
  margin: 1rem 0;
  text-transform: capitalize;
}

.steps .box-container .box p {
  font-size: 14px;
  color: red;
  line-height: 2;
}

.reviews {
  margin-top: 50px;
}

.reviews .reviews-container {
  display: flex;
  justify-content: space-between;
}

.reviews .review {
  flex: 1 1 30%;
  margin: 0 1rem;
  border: 2px solid red; /* Border around each review */
  text-align: center;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reviews .review img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  object-fit: cover;
}

.reviews .review p {
  padding: 1rem 0;
  line-height: 2;
  font-size: 14px;
  color: red;
}

.reviews .review .stars {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: red 0.2rem;
}

.reviews .review .stars i {
  font-size: 12px;
  color: darkred;
}

.reviews .review h3 {
  font-size: 23px;
  color: red;
  text-transform: capitalize;
  margin-top: 1.5rem;
}
.map-section {
  margin-top: 50px;
}

.map-container {
  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  height: 0;
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.star-gold{
  color: red;
}

</style>
