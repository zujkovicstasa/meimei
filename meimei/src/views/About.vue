<template>
  <div class="about">
    <section class="about-section">
      <div class="row">
        <div class="image">
          <img src="@/assets/images/about-img.jpg" alt="About Us">
        </div>
        <div class="content">
          <h3>Why Choose Us?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis non odit nihil, doloremque sunt aut placeat culpa. Adipisci minima, neque necessitatibus incidunt nemo eveniet mollitia quis facere vel consectetur culpa?</p>
          <router-link to="/menu" class="btn">Our Menu</router-link>
        </div>
      </div>
    </section>

    <section class="steps">
      <h1 class="title">3 Simple Steps</h1>
      <div class="box-container">
        <div class="box">
          <img src="@/assets/images/step-1.png" alt="Step 1">
          <h3>Select Food</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-2.png" alt="Step 2">
          <h3>30 Minutes Delivery</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-3.png" alt="Step 3">
          <h3>Enjoy Food!</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
        </div>
      </div>
    </section>

    <section class="reviews">

<h1 class="title">customer's reviews</h1>

<div class="swiper reviews-slider">

   <div class="swiper-wrapper">

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-1.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-2.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-3.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-4.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-5.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

      <div class="swiper-slide slide">
         <img src="../assets/images/pic-6.png" alt="">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>john deo</h3>
      </div>

   </div>

   <div class="swiper-pagination"></div>

</div>

</section>


    <!-- Spacer to push footer to the bottom -->
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  name: 'About_vue'
}
</script>

<style scoped>

.about {
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
  display:flex;
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
  flex: 18%;
}

.about .row .image img {
  width: 100%;
}

.about .row .content {
  flex: 1 1 40rem;
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
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.about-section .btn:hover {
  background-color: darkred;
}

.steps .title,
.reviews .title {
  text-align: center;
  margin-bottom: 20px;
  color:red;
}

.steps{
  margin-top:40px;
}


.steps .box-container{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
   gap:1.5rem;
   align-items: flex-start;
}

.steps .box-container .box{
  text-align: center;
  padding: 2rem;
  border: 2px solid red; /* Border around each step */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.steps .box-container .box img{
   height: 15rem;
   margin-bottom: 1rem;
   width: 100%;
   object-fit: contain;
}

.steps .box-container .box h3{
   font-size: 2rem;
   color:red;
   margin:1rem 0;
   text-transform: capitalize;
}

.steps .box-container .box p{
   font-size: 1.6rem;
   color:red;
   line-height: 2;
}

.reviews{
  margin-top: 50px;
}

.reviews .slide{
  
  margin-bottom: 4rem;
  border: 2px solid red; /* Border around each review */
  text-align: center;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reviews .slide img{
   height: 10rem;
   width: 10rem;
   border-radius: 50%;
   object-fit: cover;
}

.reviews .slide p{
   padding:1rem 0;
   line-height: 2;
   font-size: 1.6rem;
   color:red;
}

.reviews .slide .stars{
   margin-top: .5rem;
}

.reviews .slide .stars i{
   font-size:1.7rem;
   color:red;
}

.reviews .slide h3{
   font-size: 2rem;
   color:red;
   margin-top: 1.5rem;
}

</style>
