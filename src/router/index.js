import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Index from '../views/Index'


Vue.use(VueRouter)

const routes = [

    {
      path:'/header',
      name:'Headers',
      component:Header
    },
    {
      path:'/footer',
      name:'Footer',
      component:Footer
    },
    {
      path:'/',
      name:'Index',
      component:Index
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
