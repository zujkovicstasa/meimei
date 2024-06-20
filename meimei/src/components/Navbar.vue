<template>
    <nav class="navbar">
      <ul>
        <li v-for="item in menuItems" :key="item.name" @mouseover="setActiveItem(item.name)" @mouseleave="setActiveItem('')">
          <router-link :to="item.link" :class="{ active: activeItem === item.name }">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar_vue',
    data() {
      return {
        activeItem: '',
        menuItems: [
          { name: 'Početna', link: '/' },
          { name: 'Galerija', link: '/gallery' },
          { name: 'Meni', link: '/menu' },
          { name: 'Moj profil', link: '/account' },
          { name: 'O nama', link: '/about' }
        ]
      }
    },
    methods: {
      setActiveItem(item) {
        this.activeItem = item;
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #343a40;
    padding: 10px;
  }
  
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar li {
    margin-right: 20px;
  }
  
  .navbar a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px;
  }
  
  .navbar a.active {
    font-weight: bold;
  }
  
  .navbar a:hover {
    color: #cccccc;
  }
  </style>
  