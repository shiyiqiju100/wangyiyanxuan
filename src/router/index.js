import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import GeneralThings from '../pages/GeneralThings/GeneralThings'
import GoodsCart from '../pages/GoodsCart/GoodsCart'
import Personal from '../pages/Personal/Personal'
import Login from '../pages/Login/Login'


Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/home',//只有当请求对应的path才会执行import()加载对应的包
      component: Home,
      meta:{
        isShow:true //标识底部Footer
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        isShow:true
      }
    },
    {
      path: '/generalThings',
      component: GeneralThings,
      meta:{
        isShow:true
      }
    },

    {
      path: '/goodsCart',
      component: GoodsCart,
      meta:{
        isShow:true
      }
    },

    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/home'  //重定向
    },
  ]
})





export default router

