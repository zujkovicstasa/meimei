import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gallery from '../views/Gallery.vue'
import Menu from '../views/Menu.vue'
import Account from '../views/MyAccount.vue'
import About from '../views/About.vue'
import ProductList from '../components/ProductList.vue'
//import ProductItem from '../components/ProductItem'

const routes = [
  { path: '/', name: 'Home', component: HomeView, meta: { breadcrumb: [{name:'Home' } ]}},
  { path: '/gallery', name: 'Gallery', component: Gallery, meta: { breadcrumb: [{ name:'Gallery' }] }},
  { path: '/menu', name: 'Menu', component: Menu,meta: { breadcrumb: [{name:'Menu' }]}, children: [
    {
      path: 'predjela',
      component: ProductList,
      props: { category: 'predjela' },
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: 'Appetizers' },
      ] }
    },
    {
      path: 'glavna',
      component: ProductList,
      props: { category: 'glavna' },
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: 'Main courses' },
      ] }
    },
    {
      path: 'dezerti',
      component: ProductList,
      props: { category: 'dezerti' },
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: 'Desserts' },
      ] }
    },
    {
      path: 'kokteli',
      component: ProductList,
      props: { category: 'kokteli' },
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: 'Cocktails' },
      ] }
    },
    {
      path: 'boba',
      component: ProductList,
      props: { category: 'boba' },
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: 'Bubble Tea' },
      ] }
    },
    {
      path: ':category/:id',
      component: Menu,
      props: route => ({
        dish: route.params.id
      }),
      meta: { breadcrumb: [
          { name: 'Menu', link: 'menu' },
          { name: ':category', link: ':category' },
          { name: 'dish' }
       ] },
      beforeEnter: (to, from, next) => {
          const category = to.params.category;
          to.meta.breadcrumb[1].link = `menu/${category}`;
          to.meta.breadcrumb[1].name =`${to.params.category}`
          switch(to.meta.breadcrumb[1].name){
            case 'kokteli':
              to.meta.breadcrumb[1].name = 'Cocktails';
              break;
            case 'boba':
              to.meta.breadcrumb[1].name = 'Bubble Tea';
              break;
            case 'predjela':
              to.meta.breadcrumb[1].name = 'Appetizers';
              break;
            case 'glavna':
              to.meta.breadcrumb[1].name = 'Main courses';
              break;
            case 'dezerti':
              to.meta.breadcrumb[1].name = 'Desserts';
              break;
          }
          to.meta.breadcrumb[2].name = `${to.params.id}`
        next();
      } 
    }
  ]
  },
  { path: '/account', name: 'Account', component: Account, meta: { breadcrumb: [{name:'Account' }]}},
  { path: '/about', name: 'About', component: About, meta: { breadcrumb: [{name: 'About' } ]}}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
