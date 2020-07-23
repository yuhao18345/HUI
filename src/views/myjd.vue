<template>
    <div>
        <van-nav-bar title="我的惠淘">
            <!-- <template #right>
                <van-icon name="ellipsis" size="18" />
            </template> -->
        </van-nav-bar>

        <van-card
            class="name_top"
            desc="用户名：ht_529faf10f8bfa"
            :title="$store.state.username"
            thumb="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
        >
            <template #tags>
                <van-tag plain type="danger">京享值738</van-tag>
                <van-tag plain type="danger">小白信用66.8</van-tag>
                <br>
                <van-button type="primary" size="mini" style="margin-top:7px"
                    @click="quit">退出登录</van-button>
                    <!-- <van-button type="warning">警告按钮</van-button> -->
            </template>
        </van-card>

        <van-grid>
            <!-- #e93b3d -->
            <van-grid-item icon="pending-payment" style="color:#333" to="/orderlist/orderPay" text="待支付" />
            <van-grid-item icon="logistics" to="/orderlist/orderGoods" text="待收货" />
            <van-grid-item icon="after-sale" to="/orderlist/orderEnd" text="退换/售后" />
            <van-grid-item icon="orders-o" to="/orderlist/orderAll" text="全部订单" />
            <!-- <span class="iconfont .icon-weibiaoti2fuzhi04"></span> -->
        </van-grid>

        <!-- <img src="//img12.360buyimg.com/img/s64x64_jfs/t1/102785/29/14987/2346/5e6b8ed9Ee5ab6266/d6d34952c182fb1b.png.webp" alt=""> -->

        <van-row class="coupons">
            <van-col span="8" @click="$router.push('/coupon')">
                <div class="one">
                    <van-icon name="coupon-o" color="#f35348" size="30"/>    
                </div>  
                <div>优惠券</div>
            </van-col>
            <van-col span="8" @click="$router.push('/coupon')">
                <!-- <div class="one">¥</div>   -->
                <div class="one">
                    <van-icon name="gold-coin-o" color="#f35348" size="30"/>
                </div>
                <div>我的红包</div>
            </van-col>
            <van-col span="8" @click="address">
                <div class="one">
                    <van-icon name="location-o" color="#f35348" size="30"/>
                </div>  
                <div>地址管理</div>
            </van-col>
        </van-row>

        <!-- <van-row class="collect">
            <van-col span="8">
                <p class="one">99</p>  
                <p class="two">商品收藏</p>
            </van-col>
            <van-col span="8">
                <p class="one">99</p>  
                <p class="two">店铺收藏</p>
            </van-col>
            <van-col span="8">
                <p class="one">99</p>  
                <p class="two">我的足迹</p>
            </van-col>
        </van-row> -->

        <van-grid square :column-num="4">
            <van-grid-item v-for="(item,index) in nav.navImage" :key="index" @click="$router.push('/digital')">
                <van-image :src="nav.navImage[index]" style="width:30px" />
                <div style="font-size:12px;margin-top:10px">{{nav.navName[index]}}</div>
            </van-grid-item>
        </van-grid>

        <!-- goodlists 为你推荐 商品 -->
        <div class="goodlists">
            <img style="width: calc(100% - 1rem); width: 100%; opacity: 1;" src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            <van-row>
                <van-col span="12" @click="$router.push('/details')">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
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
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 惠淘仓速发
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
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
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
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 惠淘仓速发
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
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
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
                            <van-tag color="#f2270c" size="small" text-color="#fff">惠淘超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 惠淘仓速发
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
        <div style="height:50px"></div>

        <vantabbar :activevue="3"></vantabbar>

    </div>
</template>

<script>
    import vantabbar from "../components/public/vantabbar.vue";

    import { Toast } from "vant";

    export default {

        data(){
            return{
                nav: {
                    navImage: [
                        "//img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png.webp",
                        "//img12.360buyimg.com/img/s64x64_jfs/t1/97016/19/15154/2382/5e6b8e86E17a7527c/eeed6fdf78de3847.png.webp",
                        "//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png.webp",
                        "//img20.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png.webp",
                        "//img10.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png.webp",
                        "//img10.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png.webp",
                        "//img12.360buyimg.com/img/s64x64_jfs/t1/102785/29/14987/2346/5e6b8ed9Ee5ab6266/d6d34952c182fb1b.png.webp",
                        "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/101736/24/16720/4818/5e7d659fE8bb97479/4c1280ecf70a9f84.png.webp"
                    ],
                    navName: [
                        "我的预约",
                        "高价回收",
                        "惠淘火车票",
                        "应用推荐",
                        "惠淘机票",
                        "惠淘酒店",
                        "闲置管家",
                        "借钱"
                    ]

                }
            }
        }, 
        methods: {
            onClickLeft() {
                Toast("返回");
            },
            onClickRight() {
                Toast("按钮");
            },
            quit(){
                this.$store.state.username="";
                this.$router.push("/login");
            },
            address(){
                this.$router.push('/address');
            }
        },
        components:{
            vantabbar
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/font/iconfont.css";
  
    /* .van-grid{
        .van-grid-item{
            .van-icon{
                .van-grid-item__icon{
                    color:#e93b3d;
                }
            }
        }  
    } */
            
    .van-card{
        position: relative;
        // background: #f35348;
        background: #fe1b5d;
        // #ef4641
        .van-image{
            margin-left: 15px;
        }

        .van-card__content{
            margin-left: 25px;
        }

        .van-card__title{
            font-size: 14px;
        }

        .van-card__desc {
            max-height: 20px;
            color: #f6e2e0;
            line-height: 20px;
            font-size: 12px;
        }
        .van-button--primary {
            color: #fff;
            background-color: #ff976a;
            border: 1px solid orange;
            // margin-left: 150px;
            // position:absolute;
            // bottom: -6px;
            // right: 10px;
        }
    }

    .name_top{
        // background-color: #ef4641;
        color: white;
        font-size: 16px;
        padding: 20px 0px;
    }

    .collect{
        padding: 5px 0px;
        margin: 5px 0px;
        background: white;
        p{
            text-align: center;
            margin: 5px 0px;
        }
        .one{
            font-size: 16px;
            font-weight:bolder;
        }
    }
    .coupons{
        padding: 5px 0px;
        margin: 10px 0px;
        background: white;
        div{
            text-align: center;
            font-size: 12px;
            color: #666666;
        }
        .one{
            height: 34px;
            line-height: 34px;
            color: #e93b3d;
            font-size: 16px;
        }
    }

    .divider{
        margin:5px 0px;
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