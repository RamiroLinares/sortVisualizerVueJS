import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/quicksort',
    name: 'Quicksort',
    component: () => import('../views/Quicksort.vue')
  },
  {
    path: '/bubblesort',
    name: 'Bubblesort',
    component: () => import('../views/Bubblesort.vue')
  },
  {
    path: '/insertionsort',
    name: 'Insertionsort',
    component: () => import('../views/Insertionsort.vue')
  },
  {
    path: '/mergesort',
    name: 'Mergesort',
    component: () => import('../views/Mergesort.vue')
  },
  {
    path: '/pancakesort',
    name: 'Pancakesort',
    component: () => import('../views/Pancakesort.vue')
  },

  {
    path: '/selectionsort',
    name: 'Selectionsort',
    component: () => import('../views/Selectionsort.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
