<template>
    <div>
        <el-select placeholder="请选择品类" :value='value' @change='changeHandle'>
            <el-option
                v-for="item in cates"
                :key="item.id"
                :label="item.cate_zh"
                :value="item.cate">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            require:true
        }
    },
    data:function(){
        return{
            cates:[]
        }
    },
    mounted(){
        this.$http.getCate({}).then((res)=>{
           console.log('res',res.list)
           this.cates = res.list
        })
    },
    methods:{
        changeHandle(val){
            this.$emit('input',val)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>