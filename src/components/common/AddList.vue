<template>
    <div>
        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品名称:</span>
            </el-col>
            <el-col :span="20">
                <el-input v-model="info.name" placeholder="请输入商品名称"></el-input>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品描述:</span>
            </el-col>
            <el-col :span="20">
                <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入商品描述"
                    v-model="info.desc">
                </el-input>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品价格:</span>
            </el-col>
            <el-col :span="20">
                <el-input v-model="info.price" placeholder="请输入商品价格"></el-input>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品品类:</span>
            </el-col>
            <el-col :span="20">
                <CateSelect v-model="info.cate"></CateSelect>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品图片:</span>
            </el-col>
            <el-col :span="20">
                <!-- <el-input v-model="info.price" placeholder="请输入商品价格"></el-input> -->
                <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8099/api/v1/upload/img"
                    :show-file-list="false"
                    :on-success="imgUpload">
                    <img v-if="info.img" :src='img.imgBaseUrl+info.img' class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>是否热销:</span>
            </el-col>
            <el-col :span="20">
                <el-switch
                    v-model="info.hot"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span>商品排名:</span>
            </el-col>
            <el-col :span="20">
                <el-input-number v-model="info.rank" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center' align='middle'>
            <el-col :span="4">
                <span></span>
            </el-col>
            <el-col :span="20">
                <el-button type="primary" @click="addClick">提交</el-button>
            </el-col>
        </el-row>

        </div>
</template>
<script> 
import img from '@/utils/img'
export default {
    components:{
        CateSelect:()=>import('./CateSelect'),
    },
    data:function(){
        return{
           img,
            info:
                {
                    name: '',
                    desc: '',
                    price: '',
                    cate: '',
                    img: '',
                    hot: false,
                    rank: 0
                },
        }
    },
    methods:{
        addClick(){
            this.$http.getGoodList(this.info).then(()=>{
                this.$message({
                    message: '恭喜你，商品添加成功',
                    type: 'success'
                })
                this.info = {
                    name: '',
                    desc: '',
                    price: '',
                    cate: '',
                    img: '',
                    hot: false,
                    rank: 0
                }
            })
        },
        imgUpload(res){
            this.info.img = res.data.url
            console.log(this.info.img)
        }
    }
}
</script>
<style lang="scss" scoped>
.my-shop{
    .el-row{
        margin-bottom: 20px;
    }
}
 .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>