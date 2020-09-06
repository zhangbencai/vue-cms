<template>
    <div class="my-layout">
        <el-container>
            <el-aside width="200px"> 
                <Aside></Aside>
            </el-aside>
            <el-container>

                <el-header height='40px'>
                    <Header></Header>
                </el-header>

                <el-main>
                    <Main></Main>
                </el-main>

            </el-container>

        </el-container>
    </div>
</template>
<script>
export default {
    components:{
        Aside:()=>import('./Aside'),
        Header:()=>import('./Header'),
        Main:()=>import('./Main')
    }
}
</script>
<style lang="scss" scoped>
.my-layout{
    height: 100%;
    background-color: #efeef0;
  .el-container {
    height: 100%;
    .el-aside {
      background:#222222;
      color: #bbe9e9;
      height: 100%;
    }
  }
  .el-header {
    background-color: #ffffff;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .el-main {
    box-sizing: border-box;
    padding: 15px;
    margin: 10px;
    background-color: white;
    .main{
      min-width: 600px;
    }
  }
}
</style>