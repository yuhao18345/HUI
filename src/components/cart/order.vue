<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 地址 -->
        <van-contact-card 
        :type="cardType" 
        :name="name" 
        :tel="tel" 
        add-text="添加联系人"
        @click="addressfun"
        :editable="true" />

        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            desc="5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩"
            :title="item.name"
            :thumb="item.image"
            />
        </div>        

        <van-cell-group>
            <van-cell title="商品金额" :value="'¥ '+total+'.00'" />
            <van-cell title="配送方式" value="顺丰包邮"/>
            <van-cell title="退改无忧" value="商家赠送"/>
            <van-cell title="优惠券" value="无可用"/>
            <van-cell title="礼品卡" value="无可用"/>
            <!-- <van-cell title="支付方式" is-link value="在线支付" @click="showShare=true" /> -->
            <van-cell title="支付方式" is-link :value="payName" @click="showShare=true" />
            <van-share-sheet  title="支付方式" v-model="showShare" :options="options" @select="onSelect"/>
        </van-cell-group>


        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单" @submit="onsubmit" />
    </div>
</template>

<script>
    // import { Toast } from 'vant';
    export default {
        data() {
            return {
                name:"",
                tel:"",
                payName:"请选择",
                showShare: false,
                options: [
                    { name: '微信', icon: 'wechat' },   
                    { name: '支付宝', icon: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0401/1491035913798164.jpg' }, 
                    { name: 'QQ', icon: 'qq' }, 
                    { name: '在线支付', icon: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3564575005,1664859759&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=245278925ed8c394571e52a73bda0a68'},
                ],
            }
        },

        methods:{            
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            // 定义跳转方法
            addressfun(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderList/orderAll")
            },
            onSelect(option) {
                // Toast(option.name);
                this.payName=option.name;
                this.showShare = false;
            },
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
    }
</script>

<style lang="scss" scoped>
    .van-cell-group{
        .van-cell{
            .van-cell__value{
                color:#323233
            }
        }
    }
</style>

