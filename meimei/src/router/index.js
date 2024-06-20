import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gallery from '../views/Gallery.vue'
import Menu from '../views/Menu.vue'
import Account from '../views/MyAccount.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/account', name: 'Account', component: Account },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
