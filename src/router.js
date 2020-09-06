import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//解决当前位置的冗余导航的方式
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

import routes from '@/views/index.js'
import Login from '@/components/login/Login.vue'
const Home = ()=>import('@/views/home/Home.vue')

const arr = []
routes.map((ele)=>{
  if(ele.children){
    ele.children.map((ele)=>{
      arr.push({path:ele.path,component:ele.component})
    })
  }
})

const router = new VueRouter({
    routes:[
    ...arr,
    {path:'/home',component:Home},
    {path: '/login', components: {login: Login } },
    {path: '/*', redirect: '/home'}

    ]
})
router.beforeEach(function(to, from, next) {
    if (to.path != '/login') {
      if(localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
  
export default router