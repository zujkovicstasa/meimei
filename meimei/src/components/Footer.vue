<template>
    <footer class="site-footer">
      <p>Copyright 2024, Anja Meštrović i Staša Žujković, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta u Beogradu</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer_vue',
  }
  </script>
  
  <style scoped>
  .site-footer {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 1px;
    position:fixed;
    bottom:0;
    width:100%;
    background-color: rgb(249, 213, 219);
    border-top: 2px solid red;
    margin-top: auto; /* Push the footer to the bottom */
    width: 100%;
  }
  .site-footer p{
    font-size:15px;
    color:red;
  }
  </style>
  