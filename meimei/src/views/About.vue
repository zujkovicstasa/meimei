<template>
  <div class="about">
    <section class="about-section">
      <div class="row">
        <div class="image">
          <img src="@/assets/images/about-img.png" alt="About Us">
        </div>
        <div class="content">
          <h3>{{ $t('aboutUs') }}</h3>
          <p>{{ $t('aboutUsDescription') }}</p>
          <router-link to="/menu" class="btn">{{ $t('menuButton') }}</router-link>
        </div>
      </div>
    </section>

    <section class="steps">
      <h1 class="title">{{ $t('stepsTitle') }}</h1>
      <div class="box-container">
        <div class="box">
          <img src="@/assets/images/step-1.png" alt="Step 1">
          <h3>{{ $t('step1Title') }}</h3>
          <p>{{ $t('step1Description') }}</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-2.png" alt="Step 2">
          <h3>{{ $t('step2Title') }}</h3>
          <p>{{ $t('step2Description') }}</p>
        </div>
        <div class="box">
          <img src="@/assets/images/step-3.png" alt="Step 3">
          <h3>{{ $t('step3Title') }}</h3>
          <p>{{ $t('step3Description') }}</p>
        </div>
      </div>
    </section>

    <section class="reviews">
      <h1 class="title">{{$t("reviews")}}</h1>
      <div class="reviews-container">
        <div class="review">
          <img src="../assets/images/pic-1.jpg" alt="">
          <p>{{ $t("marko") }}</p><div class="stars">
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
          </div>
          <h3>Marko Marković</h3>
        </div>
        <div class="review">
          <img src="../assets/images/pic-3.jpg" alt="">
          <p>{{ $t("milica") }}</p><div class="stars">
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star star-gold"></i>
            <i class="fas fa-star-half-alt star-gold"></i>
          </div>
          <h3>Milica Simić</h3>
        </div>
        <div class="review">
          <img src="../assets/images/pic-2.jpg" alt="">
          <p>{{ $t("petar") }}</p><div class="stars">
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
      <h1 class="title">{{$t ("visit")}}</h1>
      <MapView />
    </section>

    <div class="spacer"></div>
  </div>
</template>

<script>
import MapView from "../components/Map.vue"
export default {
  name: 'About_vue',
  components:{MapView}
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
.reviews .title,
.map-section .title {
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


.star-gold{
  color: red;
}

</style>
