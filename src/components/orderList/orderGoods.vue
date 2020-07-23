<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type==2">
                <!-- <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" /> -->
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="item.dateTime | moment" />
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    :desc="value.content"
                    :title="value.name"
                    :thumb="value.image"
                    >
                </van-card>
                </div>
                <div class="orderfooter">
                    <!-- 待收货 -->
                    <van-button size="mini"  type="warning">退款申请</van-button>
                    <van-button size="mini"  type="info"
                        @click="onGoods(index)">已收货</van-button>
                </div>
            </div>
        </div>
        <!-- 推荐商品 无数据显示 -->
        <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="空空如也"
            v-show="!lists.length"
        />
        <recommend v-show="!lists.length"></recommend>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import recommend from "../recommend.vue";
    export default {
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 2); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
            onGoods(index){
                // let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货状态，
                Toast('修改已完成');
            }
        },
        components:{
            recommend
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
        }
    }
</style>