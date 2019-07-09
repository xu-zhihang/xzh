import VueRouter from 'vue-router'

//子组件都要导入到路由实例中
import home from './components/home.vue'
import member from './components/member.vue'
import shopping from './components/shopping'
import setup from './components/setup.vue'

let router = new VueRouter({
    routes:[//路由配置规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopping',component:shopping},
        {path:'/setup',component:setup}
    ],
    linkActiveClass:'mui-active'//设置路由高亮的类
})

//向外暴露router实例
export default router