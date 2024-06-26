<template>
  <div>
    <div class="banner"> 
      <a href="https://pinterest.com" class="banner-link" target="_blank">
        <img src="/Hrana/pinterest.png" alt="Pinterest" class="banner-img">
      </a>
      <a href="https://google.com" class="banner-link" target="_blank">
        <img src="/Hrana/google.png" alt="Google" class="banner-img">
      </a>
      <a href="https://instagram.com" class="banner-link" target="_blank">
        <img src="/Hrana/instagram.png" alt="Instagram" class="banner-img">
      </a>
    </div>
    <footer class="site-footer">
      <p>Copyright 2024, Anja Meštrović i Staša Žujković, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta u Beogradu</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer_vue',
}
</script>

<style scoped>
.site-footer {
  text-align: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #f9d5db; /* Light pink background */
  border-top: 2px solid red;
  width: 100%;
  position: relative;
}

.site-footer p {
  font-size: 15px;
  color: red;
  margin: 0;
}

.banner {
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between each link */
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.banner-link {
  transition: transform 0.3s ease; /* Smooth scaling effect */
}

.banner-link:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.banner-img {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Make images circular */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Slight shadow for images */
}

@media (max-width: 768px) {
  .banner {
    flex-direction: column; /* Stack links vertically on smaller screens */
    align-items: center;
  }

  .banner-link {
    margin-bottom: 10px; /* Space between links when stacked */
  }
}
</style>
