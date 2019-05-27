import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import {getStore} from './config/mUtils'
Vue.use(Router)

export const router = new Router({
  mode: 'hash',
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
      path: '/Profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "plofile" */ './views/Profile/Profile.vue')
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
  const userId = getStore('userId')
  let isLogin = false
  if(!(userId === 'undefined' || userId === null || userId === undefined)) {
    isLogin = true
  } 
  if(authRequired && !isLogin) {
    return next('/login')
  }

  next()
})

