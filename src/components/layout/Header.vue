<template>
<div class="header">
  <div>
      <el-row>
        <el-col :span="1">
          <span class="ico"><i class="el-icon-s-unfold"></i></span>
        </el-col>

        <el-col :span="20">
          <el-tabs>
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
          </el-tabs>
        </el-col>
        
        <el-col :span="3">
          <div class="my-right">
            <el-dropdown>
              <span class="el-dropdown-link">
                用户<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>切换账号</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
  </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.header{
  .ico{
    float: left;
    line-height: 40px;
    font-size: 20px;
  }
  .el-tabs{
    line-height: 40px;
  }
  .my-right{
    line-height:40px ;
    .el-dropdown-link {
      cursor: pointer;
      color: #303133;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>