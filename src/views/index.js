
const GoodAdd = ()=>import('./good/Add.vue')
const GoddList = ()=>import('./good/List.vue')
const GoodCategory = ()=>import('./good/Category.vue')
//const Home = ()=>import('./home/Home.vue')

export default [
    {
        id:1,
        text:'商品管理',
        icon:'el-icon-s-goods',
        children:[
            {id:11,text:'商品添加',path:'/goodadd/:id',component:GoodAdd,icon:'el-icon-arrow-right'},
            {id:12,text:'商品列表',path:'/goddlist',component:GoddList,icon:'el-icon-arrow-right'},
            {id:13,text:'商品品类',path:'/goodcategory',component:GoodCategory,icon:'el-icon-arrow-right'}
        ]
    },
    {
        id:2,
        text:'促销管理',
        icon:'el-icon-s-ticket',
        children:[
            {id:21,text:'购活动',path:'/goodadd',component:GoodAdd,icon:'el-icon-arrow-right'},
            {id:22,text:'优惠列表',path:'/goodadd',component:GoodAdd,icon:'el-icon-arrow-right'},
        ]
    },
    {
        id:3,
        text:'订单管理',
        icon:'el-icon-s-order',
        children:[
            {id:31,text:'订单列表',path:'/goodadd',component:GoodAdd,icon:'el-icon-arrow-right'},
            {id:32,text:'发货单列表',path:'/goodadd',component:GoodAdd,icon:'el-icon-arrow-right'},
            {id:33,text:'退货单列表',path:'/goodadd',component:GoodAdd,icon:'el-icon-arrow-right'},
        ]
    },
]