<template>
    <div class="page">
        <van-sticky>
            <van-nav-bar title="购物车" 
                left-arrow
                @click-left="$router.go(-1)"
                class="cartSerach">
                <!-- <template #right>
                    <van-icon name="ellipsis" size="18" />
                </template> -->
            </van-nav-bar>
        </van-sticky>

        <!-- 商品列表 -->
        <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
            <van-col span="2">
                <!-- <van-checkbox v-model="item.isSelect"></van-checkbox> -->
                <van-checkbox :value="item.isSelect" @click="inputselect(index)" ></van-checkbox>
                <!-- <input type="checkbox" :checked="item.isSelect" @click="inputselect(index)" > -->
            </van-col>
            <van-col span="7">
                <!-- <van-image
                fit="cover"
                src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp"
                /> -->
                <van-image
                fit="cover"
                :src="item.image"
                />
            </van-col>
            <van-col span="15">
                <div class="content">
                    <h1>{{item.name}}</h1>
                    <h2>骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机</h2>
                    <p class="price">￥{{item.price}}</p>
                    <p>
                        <span @click="item.num <= 1? 1:item.num--">-</span>
                        <span>{{item.num}}</span>
                        <span @click="item.num++">+</span>
                    </p>
                    <p>
                        <van-icon name="delete" size="20" @click="del(index)"/>
                    </p>
                </div>
            </van-col>
        </van-row>

        <!-- goodlists 为你推荐 商品 -->
        <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="购物车中没有商品"
            v-show="!($store.state.cart.lists.length)"
        />
        <div style="height:200px" v-show="$store.state.cart.lists.length"></div>
        <!-- v-show="!($store.state.cart.lists.length)" -->
        <div class="goodlists">
            <img style="width: calc(100% - 1rem); width: 100%; opacity: 1;" src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            <van-row>
                <van-col span="12" @click="$router.push('/details')">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
                <van-col span="12" @click="$router.push('/details')">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>
                    </div>
                </van-col>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
        </div>
        <!-- goodlists end 为你推荐 商品 -->

        <van-submit-bar :price="total * 100" button-text="提交订单" 
            v-show="$store.state.cart.lists.length"
            @submit="onsubmit">  
            <!-- <van-checkbox v-model="checkedAll">全选</van-checkbox> -->
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>

        <vantabbar :activevue="2"></vantabbar>

    </div>
</template>

<script>
    import vantabbar from "../components/public/vantabbar.vue";

    export default {
        data() {
            return {
                checked:true,
                total:0,
                /* lists:[
                    {
                        isSelect:true,
                        name:"三只松鼠 休闲零食",
                        price:16.0,
                        num:1
                    },
                    {
                        isSelect:true,
                        name:"三只松鼠 休闲零食",
                        price:16.0,
                        num:1
                    },
                    {
                        isSelect:true,
                        name:"三只松鼠 休闲零食",
                        price:16.0,
                        num:1
                    },
                    {
                        isSelect:true,
                        name:"三只松鼠 休闲零食",
                        price:16.0,
                        num:1
                    },
                ] */
                lists:[]
            }
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1);
            },
            del(index){
                this.lists.splice(index,1)
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            },
            onsubmit(){
                if (this.$store.state.username) {
                    this.$router.push('/order');
                } else {
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/order"
                        }
                    });
                }   
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            console.log(this.lists);
            this.checkboxclick();
            this.sum();
        },
        beforeUpdate(){
            console.log('beforeUpdate');
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
        },
        components:{
            vantabbar
        }
        /* computed:{
            sum(){
                // 总价格计算
                // total 累加值
                return this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            // 全选按钮
            checkedAll:{
                get(){
                    // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                    return this.lists.every((item)=>{
                        return item.isSelect;
                    })
                },
                set(value){
                    // 遍历所有数据选中与反选
                    this.lists.forEach((item)=>{
                        return item.isSelect = value;
                    })
                }
            }
        } */
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #f5f5f5;
}
.cartSerach{
    background-color: #f2f2f2;
}
.goodslist{
    position: relative;
    background-color: #fff;
    margin-bottom: 10px;
    .van-image{
        margin-top: 5px;
    }
    .van-checkbox{
        position: relative;
        left:7px;
        top:48px;
    }
    .content{
        padding-left:10px;
        h1{
            margin-top: 5px;
            font-size: 14px;
        }
        h2{
            font-size: 12px;
            font-weight: normal;
        }
        .price{
            font-size: 14px;
            color:#f2270c;
            font-weight:bold;
            margin: 3px 0px;
        }
        p{
            &>span{
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                // border: 1px solid #000;
                background-color: #f7f7f7;
                font-size: 16px;
                text-align: center;
            }
            .van-icon{
                float:right;
            }
        }
        
        .danger{
            span{
                font-size: 12px;
            }
        }
    }
}

.van-submit-bar{
    bottom: 50px;
}
.page{
    margin-bottom: 50px;
}

.goodlists{
    padding: 3px;
    .van-row{
        margin-bottom: 3px;
        .van-col{
            .content{
                background:white;
                img{

                }
                h2{
                   text-overflow: -o-ellipsis-lastline;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-line-clamp: 2; //行数需设置
                   line-clamp: 3;
                   -webkit-box-orient: vertical; 
                }
                p{
                    .price{
                        color: #f44f4f;
                        font-size: 20px;
                        font-weight:bolder;
                        .icon{
                            font-size: 14px;
                        }
                    }
                    .van-button{
                        float: right;
                    }
                }
            }
        }
    }
}
</style>