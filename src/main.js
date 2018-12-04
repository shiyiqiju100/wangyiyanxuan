// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
//mint-ui的间接依赖,也可单独下载
import VueLazyLoad from 'vue-lazyload'
import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import store from './store'

// webpack在打包时自动解析为js对应的类型(对象)
import './mock/mockServer'  //引入 webpack才能打包 没有暴露 所以不用接


//声明使用插件,内部定义了一个全局指令: lazy
/*Vue.use(VueLazyLoad,{
  loading
})*/


// 注册全局组件
/*
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button) // <mt-button/>

*/


// 将store保存Vue上,必须在创建vm之前执行

Vue.store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


