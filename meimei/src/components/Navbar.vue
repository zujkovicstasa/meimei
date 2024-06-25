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
       
      <div class="breadcrumb-container">
        <ol class="breadcrumb">
        <li
          v-for="(breadcrumb, idx) in breadcrumbList"
          :key="idx"
          :class="{ 'breadcrumb-item': true, active: idx === breadcrumbList.length - 1 }">
          <span v-if="idx === breadcrumbList.length - 1">{{ breadcrumb.name }}</span>
          <a v-else href="#" @click.prevent="navigateTo(breadcrumb)">{{ breadcrumb.name }}</a>

        </li>
        </ol>
      </div>
  
    </nav>

  
</template>

<script>
export default {
  name: 'Navbar_vue',
  data() {
    return {
      activeItem: '',
      breadcrumbList: [],
      menuItems: [
        { name: 'Početna', link: '/' },
        {
          name: 'Meni',
          subItems: [
            { name: 'Predjela', link: '/menu/predjela' },
            { name: 'Glavna jela', link: '/menu/glavna' },
            { name: 'Dezerti', link: '/menu/dezerti' },
            { name: 'Kokteli', link: '/menu/kokteli',},
            { name: 'Boba caj', link: '/menu/boba',}
          ]
        },
        { name: 'Galerija', link: '/gallery' },
        { name: 'Moj profil', link: '/account' },
        { name: 'O nama', link: '/about' }
      ]
    }
  },watch: { '$route' () { this.breadcrumbList = this.$route.meta.breadcrumb; } },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
    navigateTo(breadcrumb) {
      if (breadcrumb.link) {
        this.$router.push({ path: `/${breadcrumb.link}` });
      }
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
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
 .breadcrumb-container {
  display: flex;
  align-items: center;
  margin-left: auto; 
}

.breadcrumb {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  
  color: red;
  
}
.breadcrumb-item::before {
  padding-top: 10px;
  position: absolute;
  top: 6;
  margin-left: -12px;
}


.breadcrumb-item a {
  color: red;
  text-decoration: underline;
}

.breadcrumb-item a:hover {
  color: red;
  font-weight: bold;
  text-decoration: underline;
}

.breadcrumb-item a:focus {
  color: red;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: red;
}

.breadcrumb-item.active a {
  color: red;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: red;
}

.breadcrumb-item span {
  color: red;
  font-style: italic;
  pointer-events: none;
}
</style>
