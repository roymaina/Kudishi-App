import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breakfast from '@/views/Breakfast.vue'
import Lunch from '@/views/Lunch.vue'
import Supper from '@/views/Supper.vue'
import Cart from '@/views/Cart.vue'
import Foods from '@/views/Foods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Cart',
    name:'Cart',
    component: Cart
  },
  {
    path:'/Foods',
    name:'Foods',
    component: Foods
  },
  {
    path: '/Breakfast',
    name: 'Breakfast',
    component: Breakfast
  },
  {
    path: '/Lunch',
    name: 'Lunch',
    component: Lunch
  },
  {
    path: '/Supper' ,
    name: 'Supper' ,
    component: Supper
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
