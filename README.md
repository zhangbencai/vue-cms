## 项目搭建和配置环境
1、安装vue脚手架
    npm安装命令
    ```
     npm install -g @vue/cli
    ````
    检查其版本是否正确
    ```
    vue --version
    ```
2、用vue脚手架创建项目
    命令
    ```
    vue create 项目名称
    ```
### 脚手架创建的目录结构
    public
    +src----存放各种路径和资源
        +assets ----存放静态资源
        +components ----存放各种子主件，自己封装的
        +store  ----状态管理，共享数据的(vuex)
        +utils  ----封装各种调用接口方法(axios)
        +views  ---- 存放各种页面
        +App.vue  ----
        +main.js  ----导入各种文件并且要挂载
        +router.js  ---- 配置路由的文件
## 集成路由
1、安装
    ```
    npm install vue-router -S
    ```
2、在src目录下创建一个router.js文件，并且配置以下代码
```
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[]
})
export default router
```
3、在src目录下的main.js文件，导入和挂载
```
//导入路由实例
import router from './router.js'
new Vue({
  router,//路由挂载
  render: h => h(App),
}).$mount('#app')
```
## vuex
1、安装
```
 cnpm install vuex -S
```
2、在src目录下创建一个store文件夹，并且在store文件夹下创建一个index.js文件
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({})

export default store
```
3、在src目录下的main.js文件，导入和挂载
```
//导入状态管理
import store from '@/store/index.js'
new Vue({
  store,//状态管理挂载
  render: h => h(App),
}).$mount('#app')
```
## sass
1、安装
```
cnpm install sass-loader -D
cnpm install node-sass -D
```
2、在要使用的文件下引用
```
<style lang="scss" scoped>
</style>
```
## axios
1、安装
```
cnpm install axios -S
```
2、在src目录下创建一个utils文件夹，并且创建一个fetch.js文件
```
import axios from 'axios'
let baseURL = ''
const instance = axios.create({
    baseURL:baseURL,
    timeout:7000,
    headers:{}
})
// 请求拦截器：在请求被发送出去之前，做一些验证工作
instance.interceptors.request.use(function (config) {
    // console.log('请求拦截器', config)
    // 加token
    // token 的作用，是用户鉴权
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
}, function (error) {
    return Promise.reject(error)
})
// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use(function(response){
    if(response.status === 200) {
        if(response.data && response.data.msg){
            return response.data.data || response.data
        }else{
            alert('网络异常，请求稍后再试')
        }
    }
},function(error){
    return Promise.reject(error)
})
export default instance
```
3、在src目录下的main.js文件，导入和挂载
```
//导入axios把http封装的api方法，挂在原型上，便于整个应用程序进行使用
import http from '@/utils/fetch.js'
Vue.prototype.$http=http
```
## element-ui
1、安装
```
npm inatall element-ui -S
```
2、在src目录下的main.js文件，导入和挂载
```
//导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```
## van
1、安装
```
npm i vant -S
```
2、