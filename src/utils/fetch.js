import axios from 'axios'
let baseURL = 'http://localhost:8099/api/v1' //开发环境
//let baseURL =''//生产环境
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
    //请求失败
    return Promise.reject(error)
})
export default instance