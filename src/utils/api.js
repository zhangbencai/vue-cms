import axios from './fetch'

//登录接口
export function getLogin(data){
    return axios({
        url: '/users/cms/login',
        method: 'POST',
        data
    })
}

//增加品类
export function getCategory(data){
    return axios ({
        url:'/cates/cms/add',
        method:'POST',
        data
    })
}
//删除品类
export function getDelete(params){
    return axios({
        url:'/cates/cms/one',
        method:"GET",
        params
    })
}

//获取品类
export function getCate(params){
    return axios({
        url:'/cates/cms/all',
        method:'GET',
        params
    })
}

//增加商品
export function getGoodList(data){
    return axios ({
        url:'/goods/cms/create',
        method:'POST',
        data
    })
}

//获取商品列表
export function getProductlist(params){
    return axios({
        url:'/goods/cms/list',
        method:'GET',
        params
    })
}

//获取商品详情
export function getGoodDetail(params){
    return axios({
        url:'/goods/cms/detail',
        method:'GET',
        params
    })
}

//删除商品
export function getDel(params){
    return axios({
        url:'/goods/cms/del',
        method:'GET',
        params
    })
}

//添加轮播图
export function getSlideShow(data){
    return axios ({
        url:'/jd/ads/create',
        method:'POST',
        data
    })
}

//查看所有的轮播图
export function getShow(params){
    return axios ({
        url:'jd/ads/all',
        method:'GET',
        params
    })
}
//抛出
export default{
    getLogin,
    getCategory,
    getCate,
    getGoodList,
    getProductlist,
    getDelete,
    getDel,
    getGoodDetail,
    getSlideShow,
    getShow
}