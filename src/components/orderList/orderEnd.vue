<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type==3">
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
                    <!-- 已完成 -->
                    <van-button size="mini" @click="showPopup">商品评价</van-button>
                </div>
                
                <van-action-sheet v-model="show" title="商品评价">
                    <div class="content">
                        <div>
                            <span style="font-size:18px">物流服务:</span>
                            <van-rate
                                v-model="value1"
                                :size="25"
                                color="#ee0a24"
                                void-icon="star"
                                void-color="#eee"
                                />
                        </div>
                        <div>
                            <span style="font-size:18px">服务态度:</span> 
                            <van-rate
                                v-model="value2"
                                :size="25"
                                color="#ee0a24"
                                void-icon="star"
                                void-color="#eee"
                                />
                        </div>
                    </div>
                </van-action-sheet>
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
        data() {
            return {
                show: false,
                value1: 0,
                value2: 0,
            };
        },

        methods: {
            showPopup() {
                this.show = true;
            },
        },
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 3); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            console.log(this.lists.length)
            if(!this.lists.length){
                Toast('添加商品');
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
    .van-action-sheet{
        .van-rate{
            transform: translateY(4px);
        }
    }

    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            // text-align: center;
            padding: 0px 16px 10px 16px;
        }
    }

    .content {
        padding: 16px 16px 160px;
    }
</style>