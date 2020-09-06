//安装vue
import Vue from 'vue'
//引入根组件
import App from './App.vue'
// 关闭项目启动的生产提示
Vue.config.productionTip = false

//导入路由实例
import router from './router.js'

//导入状态管理
import store from '@/store/index.js'

//导入axios把http封装的api方法，挂在原型上，便于整个应用程序进行使用
import http from '@/utils/api'
Vue.prototype.$http=http

//导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,//路由挂载
  store,//状态管理挂载
  render: h => h(App),
}).$mount('#app')
