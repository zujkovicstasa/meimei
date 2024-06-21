<template>
  <nav class="navbar">
    <ul>
      <li 
        v-for="item in menuItems" 
        :key="item.name" 
        @mouseover="setActiveItem(item.name)" 
        @mouseleave="setActiveItem('')"
      >
        <router-link 
          v-if="!item.subItems" 
          :to="item.link" 
          :class="{ active: activeItem === item.name }"
        >
          {{ item.name }}
        </router-link>
        <div v-else class="dropdown">
          <span :class="{ active: activeItem === item.name }">{{ item.name }}</span>
          <ul class="dropdown-menu" v-if="activeItem === item.name">
            <li v-for="subItem in item.subItems" :key="subItem.name">
              <router-link 
                v-if="!subItem.subItems" 
                :to="subItem.link" 
                :class="{ active: activeItem === subItem.name }"
              >
                {{ subItem.name }}
              </router-link>
              <div v-else class="dropdown">
                <span>{{ subItem.name }}</span>
                <ul class="dropdown-menu">
                  <li v-for="subSubItem in subItem.subItems" :key="subSubItem.name">
                    <router-link :to="subSubItem.link">{{ subSubItem.name }}</router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
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
        {
          name: 'Meni',
          subItems: [
            { name: 'Predjela', link: '/menu/predjela' },
            { name: 'Glavna jela', link: '/menu/glavna-jela' },
            { name: 'Dezerti', link: '/menu/dezerti' },
            { name: 'Piće', link: '/menu/pice',}
          ]
        },
        { name: 'Galerija', link: '/gallery' },
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
  border-top: 2px solid red;
  background-color: rgb(249, 213, 219);
  padding: 2px;
  padding-left:15px;
  border-bottom: 2px solid red;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar li {
  margin-right: 20px;
  position: relative;
}

.navbar a,
.navbar span {
  color: red;
  text-decoration: none;
  padding: 10px;
  display: block;
}

.navbar a.active,
.navbar span.active {
  font-weight: bold;
}

.navbar a:hover,
.navbar span:hover {
  font-style: bold;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: rgb(249, 213, 219);
  padding: 10px;
  border: 1px solid red;
  list-style: none;
  z-index: 1;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  margin-top: 5px;
  margin-bottom: 5px;
}

.dropdown-menu a {
  padding: 5px 10px;
  display: block;
  color: red;
  text-decoration: none;
}

.dropdown-menu a:hover {
  color: white;
  border-radius: 5px;
}

.dropdown-menu .dropdown {
  position: relative;
}

.dropdown-menu .dropdown-menu {
  left: 100%;
  top: 0;
}
</style>
