

import Vue from 'vue'
//mint-ui的间接依赖,也可单独下载


import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split'

// webpack在打包时自动解析为js对应的类型(对象)
import './mock/mockServer'

Vue.component('Split',Split)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


