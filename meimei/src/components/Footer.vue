<template>
<div>
  <div class="banner"> 
        <a href="https://pinterest.com" class="banner-link"><img src="/Hrana/pinterest.png" alt="" class="lg" target="_blank"></a>
        <a href="https://google.com" class="banner-link"><img src="/Hrana/google.png" alt="" class="lg" target="_blank"></a>
        <a href="https://instagram.com" class="banner-link"><img src="/Hrana/instagram.png" alt="" class="lg" target="_blank"></a>
    
      </div>
    <footer class="site-footer">
      
       
      <div>
        <p>Copyright 2024, Anja Meštrović i Staša Žujković, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta u Beogradu</p>
      </div>
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
    padding-top: 10px;
    padding-bottom: 1px;
    bottom:0;
    display: flex;
    background-color: rgb(249, 213, 219);
    border-top: 2px solid red;
    width: 100%;
    
  }
  .site-footer p{
    font-size:15px;
    color:red;
  }
  .banner {
  margin-top: 30px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    margin-bottom: 10px;
}

.banner-link {
  margin: 0 10px;
  color: #007bff;
  text-decoration: none;
}

.banner-link:hover {
  text-decoration: underline;
}
.lg{
  width:50px;
  height: 50px;
  width: auto;
}
  </style>
  