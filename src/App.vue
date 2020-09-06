<template>
  <div class="app">
    <!-- 登录页面 -->
    <router-view name='login' v-if='$route.path=="/login"'></router-view>
    <!-- 系统内部页面 -->
    <MyLayout v-else></MyLayout>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
     MyLayout:()=>import('@/components/layout/MyLayout.vue')
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
}
/* 设置add.vue里上传图片的样式 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  /* 修改商品列表List.vue字体大小 */
  .el-table .cell{
    font-size: 12px;
}
</style>
