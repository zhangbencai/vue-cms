<template>
    <div class='my-category'>
        <h1>商品品类添加</h1>
        <div>
            <el-row type='flex' justify='center' align='middle'>
                <el-col :span="5">
                    <span>品类名称(中文):</span>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="cate_zh" placeholder="请输入品类名称"></el-input>
                </el-col>
            </el-row>

            <el-row type='flex' justify='center' align='middle'>
                <el-col :span="5">
                    <span>品类名称(英文):</span>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="cate" placeholder="请输入品类名称"></el-input>
                </el-col>
            </el-row>

            <el-row type='flex' justify='center' align='middle'>
                <el-col :span="5">
                    <span></span>
                </el-col>
                <el-col :span="8">
                     <el-button type="success" @click='addHamdle'>添加</el-button>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-table
                ref="multipleTable"
                :data="list"
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    align='center'
                    type="selection"
                    width="100">
                </el-table-column>

                <el-table-column
                    align='center'
                    prop="cate_zh"
                    label="品类"
                    width="80">
                </el-table-column>

                <el-table-column
                    align='center'
                    prop="cate"
                    label="品类英文"
                    width="120">
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
                        <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                            <el-row type='flex' justify='center' align='middle'>
                                <el-col :span="7">
                                    <span>品类名称(中文):</span>
                                </el-col>
                                <el-col :span="10">
                                    <el-input v-model="cate_zh" placeholder="请输入品类名称"></el-input>
                                </el-col>
                            </el-row>

                            <el-row type='flex' justify='center' align='middle'>
                                <el-col :span="7">
                                    <span>品类名称(英文):</span>
                                </el-col>
                                <el-col :span="10">
                                    <el-input v-model="cate" placeholder="请输入品类名称"></el-input>
                                </el-col>
                            </el-row>

                            <el-row type='flex' justify='center' align='middle'>
                                <el-col :span="5">
                                    <span></span>
                                </el-col>
                                <el-col :span="8">
                                    <el-button type="success" @click='addHamdle'>修改</el-button>
                                </el-col>
                            </el-row>
                            <el-button slot="reference" @click="handleClick('edit', scope.row)">编辑</el-button>
                    </el-popover>
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
import moment from 'moment'
export default {
    data:function(){
        return{
            cate_zh:'',
            cate:'',
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
        init(){
            this.$http.getCate({}).then((res)=>{
                this.list = res.list
            })
        },
        addHamdle(){
            let data = {
                cate:this.cate,
                cate_zh:this.cate_zh
            }
            this.$http.getCategory(data).then((res)=>{
                console.log('res',res)
                this.$message({
                    message: '恭喜你，添加成功',
                    type: 'success'
                });
                this.cate = ''
                this.cate_zh = ''
                this.init()
            })
        },
        handleClick(type,item){
            if(type==='edit'){
                console.log('编辑',item._id)
            }else{
                console.log('删除',item._id)
                let params={
                    _id:item._id
                }
                console.log(params)
                this.$http.getDelete(params).then((res)=>{
                    console.log('res',res)
                    this.$message({
                    message: '恭喜你，删除成功',
                    type: 'success'
                });
                this.init();
               })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.my-category{
    .el-row{
        margin-bottom: 20px;
    }
}
</style>