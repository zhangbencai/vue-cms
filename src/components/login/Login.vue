<template>
    <div class="login">
       <div class="box">
           <h1>欢迎您登录电商管理系统</h1>
           <div>
               <el-input placeholder="用户名" v-model="username" clearable></el-input>
           </div>
           <div>
               <el-input placeholder="密码" v-model="password" show-password></el-input>
           </div>
           <div>
               <el-button type="primary" class="but" @click="login">登录</el-button>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
           let data = {
               username:this.username,
               password:this.password
           }
           this.$http.getLogin(data).then((res)=>{
               console.log('登录成功',res)
               localStorage.setItem('token',res.token)
               this.$router.push('/home')
           })
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    color: #eeeeee;
    overflow: hidden;
    .box{
        width: 400px;
        margin:0 auto;
        margin-top: 200px;
        h1{
            text-align: center;
        }
        div{
            line-height: 60px;
        }
        .but{
            width: 100%;
        }
    }
}
</style>