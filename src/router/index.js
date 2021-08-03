import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/PageSearch.vue')
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: () => import('../views/PageCategory.vue'),
    props: true
  },
  {
    path: '/movie/:movieId',
    name: 'Movie',
    component: () => import('../views/PageMovie'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/PageCart'),
    props: true
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('../views/PageNotFound'),
    props: true
  },
  {
    path: '*',
    name: 'any',
    redirect: { name: 'NotFound' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
