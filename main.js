import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)



// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import 'mint-ui/lib/style.css'



import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
//导入路由实例
import router from './router.js'
//导入根组件
import app from './App.vue'

let vm=new Vue({
  el:'#app',
  methods:{
    
  },
  render:c=>c(app),
  router
})