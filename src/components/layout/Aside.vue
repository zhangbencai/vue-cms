<template>
    <div class="aside">
        <!-- logo -->
        <div class="logo">
            <h1>LOGO</h1>
        </div>
        <!-- 导航 -->
        <div class="my-nav">
            <el-menu
                :router='true'
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#222222"
                text-color="#fff"
                active-text-color="#09b4c5"
            >
            <!-- 首页 -->
            <el-menu-item index="1" :route="{'path':'/home','component':hom}">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <!-- 商品管理 -->
            <el-submenu v-for='sub in routes' :key='sub.id' :index="sub.id+''">
                <template slot="title">
                <i :class="sub.icon"></i>
                <span v-text='sub.text'></span>
                </template>
                <el-menu-item v-for='item in sub.children' :key='item.id' :index="item.id+''" :route="{'path':item.path.replace(':id',''),'component':item.component}">
                    <i :class="item.icon" ></i>
                    <span v-text='item.text'></span>
                </el-menu-item>
            </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
import Home from '@/views/home/Home.vue'
import routes from '@/views/index.js'
export default {
   data:function(){
       return{
           hom:Home,
           routes
       }
   },
   methods:{
       abc(){
           console.log("aaa")
       }
   }
}
</script>
<style lang="scss" scoped>
.aside{
    .logo{
        height: 60px;
        background-color: #ffffff;
        h1{
            line-height: 60px;
            margin: 0;
            text-align: center;
            color: #303133;
        }
    }
    .my-nav{
        height: 100%;
    }
}
</style>