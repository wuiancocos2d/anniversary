import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import {getCookie} from './config/mUtils'
Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, 
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login/LoginView.vue')
    },
    {
      path: '/plofile',
      name: 'plofile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "plofile" */ './views/Plofile/Plofile.vue')
    },

    {
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Article" */ './views/Article.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Article" */ './views/EditeView.vue')
    }
  ]
})


export default router

router.beforeEach((to,from, next)=> {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = getCookie('loginUser')
  if(authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})