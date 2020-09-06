<template>
<div>
  <h3>轮播图广告:</h3>
  <div>
    <el-row type='flex' align='middle'>
      <el-col :span="4"><span>标题：</span></el-col>
      <el-col :span="8">
        <el-input
          placeholder="请输入内容"
          v-model="info.text"
          clearable>
        </el-input>
      </el-col>
    </el-row>

    <el-row type='flex' justify='center' align='middle'>
        <el-col :span="4">
          <span>轮播图图片</span>
        </el-col>
        <el-col :span="20">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:8099/api/v1/upload/img"
              :show-file-list="false"
              :on-success="imgUpload">
              <img v-if="info.img" :src="img.imgBaseUrl+info.img" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-col>
      </el-row>
      <div class="but">
        <el-row type='flex' align='middle'>
          <el-col :span="4"></el-col>
          <el-col :span="8">
            <el-button type="primary" @click="addClick">提交</el-button>
          </el-col>
        </el-row>
      </div>
  </div>
  
  <div>
      <el-table
          ref="multipleTable"
          :data="list"
          tooltip-effect="dark"
          style="width: 100%">

          <el-table-column
              align='center'
              prop="text"
              label="标题"
              width="80">
          </el-table-column>

          <el-table-column
            align='center'
            label="图片"
            width="200">
          <template slot-scope="scope">
              <img :src="img.imgBaseUrl+scope.row.img">
          </template>
          </el-table-column>

          <el-table-column
              align='center'
              prop="create_time"
              label="新增时间"
              :formatter="dateFormat"
              width="200">
          </el-table-column>

          <el-table-column align='center' label="操作" width="200">
              <template slot-scope="scope">
                  <el-button
                  size="mini"
                  @click="handleClick('edit', scope.row)">编辑</el-button>
                  <el-button
                  size="mini"
                  type="danger"
                  @click="handleClick('del', scope.row)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
  
</div>
</template>
<script>
import img from '@/utils/img'
import moment from 'moment'
export default {
  data:function(){
        return{
          img,
          info:{
            text:'',
            img:''
          },
          list:[]
        }
      },
      mounted(){
        this.init();
    },
    methods:{
       //将时间戳转换为时间
        dateFormat(row, column) {
            var date = row[column.property];
                if (date == undefined) {
                    return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
        },
      //初始化调用所有的轮播图
      init(){
        this.$http.getShow({}).then((res)=>{
          this.list = res.list
        })
      },
      //上传成功后图片
      imgUpload(res){
         this.info.img = res.data.url
         console.log(this.info.img)
      },
      //增加轮播图
      addClick(){
        let data = this.info
        this.$http.getSlideShow(data).then(()=>{
            this.$message({
                message: '恭喜你，商品添加成功',
                type: 'success'
            })
            this.info={
              text:'',
              img:''
            }
            this.init();
        })
      },
      //进行编辑和删除操作
      handleClick(){

      }
    }
}
</script>
<style lang="scss" scoped>
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
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader{
    margin-top: 30px;
  }
 .but{
   margin-top: 30px;
 }
 img{
        display: block;
        width: 200px;
        height: 100px;
    }
</style>