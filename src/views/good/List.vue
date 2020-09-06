<template>
    <div>
        <h1>商品列表</h1>
        <div>
            <el-row type="flex" align="middle">
                <el-col :span="3">
                    <span>品类筛选</span>
                </el-col>
                <el-col :span="6">
                      <CateSelect v-model="cate"></CateSelect>
                </el-col>
            </el-row>
        </div>
        <div class="my-table">
            <el-table
                :data="list"
                style="width: 100%">

                <el-table-column
                    align='center'
                    label="图片"
                    width="120">
                <template slot-scope="scope">
                    <img :src="img.imgBaseUrl+scope.row.img">
                </template>
                </el-table-column>

                <el-table-column
                    align='center'
                    label="商品名称"
                    prop = 'name'
                    width="160">
                </el-table-column>

                <el-table-column
                align='center'
                label="商品介绍"
                prop = 'desc'
                width="300">
                </el-table-column>

                <el-table-column
                    align='center'
                    label="商品价格"
                    prop = 'price'
                    width="80">
                </el-table-column>

                <el-table-column
                    label="品类"
                    align='center'
                    prop='cate'
                    width="80">
                </el-table-column>

                <el-table-column
                    align='center'
                    label="是否热销"
                    prop='hot'
                    width="80">
                </el-table-column>

                <el-table-column
                    align='center'
                    label="商品排名"
                    prop = 'rank'
                    width="80">
                </el-table-column>

                <el-table-column
                    align='center'
                    label="商品添加时间"
                    prop = 'create_time'
                    width="160"
                    :formatter="dateFormat"
                >
                </el-table-column>

                <el-table-column label="操作"  width="240">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size='2'
                @current-change='pageChange'
                :current-page='page'
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {CateSelect} from '@/components'
import moment from 'moment'
import img from '@/utils/img'
export default {
    components:{
        CateSelect
    },
    computed:{
        
    },
    data:function(){
        return{
            img,
            cate:'',
            total:0,
            list: [],
            page:1
        }
    },
    watch:{
        cate(){
            this.page = 1
            this.init()
        }
    },
    mounted(){
        this.init() 
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
        init(){
            let params = {
                cate: this.cate,
                page: this.page
            }
            this.$http.getProductlist(params).then(res=>{
                console.log('商品列表',res)
                this.list = res.list
                this.total = res.total
            })
        },
         //点击分页
        pageChange(page){
            this.page = page
            this.init()
        },
        //编辑
        handleEdit(row){
            this.$router.push('/goodadd/'+row._id)
        },
        //删除
        handleDelete(item){
            let params = {
                _id:item._id
            }
            this.$http.getDel(params).then(()=>{
                    this.$message({
                    message: '恭喜你，删除成功',
                    type: 'success'
                });
            })
            this.page = 1
            this.init()
        },
    }
}
</script>
<style lang="scss" scoped>
.my-table{
    margin: 60px 0;
    img{
        display: block;
        width: 100px;
        height: 100px;
    }
}
</style>