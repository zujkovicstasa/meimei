import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gallery from '../views/Gallery.vue'
import Menu from '../views/Menu.vue'
import Account from '../views/MyAccount.vue'
import About from '../views/About.vue'
import ProductList from '../components/ProductList.vue'
//import ProductItem from '../components/ProductItem'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/menu', name: 'Menu', component: Menu, children: [
    {
      path: 'predjela',
      component: ProductList,
      props: { category: 'predjela' }
    },
    {
      path: 'glavna',
      component: ProductList,
      props: { category: 'glavna' }
    },
    {
      path: 'dezerti',
      component: ProductList,
      props: { category: 'dezerti' }
    },
    {
      path: 'kokteli',
      component: ProductList,
      props: { category: 'kokteli' }
    },
    {
      path: 'boba',
      component: ProductList,
      props: { category: 'boba' }
    },
    {
      path: ':category/:id',
      component: Menu,
      props: route => ({
        dish: route.params.id
      })
    }
  ]
  },
  { path: '/account', name: 'Account', component: Account },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
