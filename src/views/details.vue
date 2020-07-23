<template>
    <div>
        <!-- 返回按钮 plain hairline-->
        <van-button
            type="default"
            class="arrowleftgo"
            @click="$router.go(-1)"
            color="#616366"
            round
            icon="arrow-left"
        ></van-button>

        <van-button
            type="default"
            class="share"
            @click="showShare = true"
            color="#616366"
            round
            icon="ellipsis"
        ></van-button>

        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />

        <!-- 轮播图 swiper-->
        <swiper :img="Images"></swiper>

        <div class="yearImg">
            <img
                src="//img12.360buyimg.com/img/s750x100_jfs/t1/126365/6/2669/64461/5ec7a70bEa8cba91d/7aad1d2c0217bd6b.png.webp"
                alt
            />
        </div>

        <div class="content">
            <h1>
                <span>¥</span>
                {{goods.price}}
            </h1>
            <div class="text">
                <van-tag class="vanTagOne" color="#f2270c" size="medium" text-color="#fff">618</van-tag>
                <van-tag color="#f2270c" size="medium" text-color="#fff">自营</van-tag>
                {{goods.name}} 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
            </div>
        </div>

        <div class="strategyImg">
            <img
                src="//img.alicdn.com/imgextra/i4/370627083/O1CN017kgRC622C3ufLonkD_!!370627083.jpg_760x760Q90s50.jpg_.webp"
                alt
            />
        </div>

        <!-- 介绍 -->
        <div class="introduce">
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i1/370627083/O1CN01mLoi3u22C3w1Hn9H1_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i3/370627083/O1CN01N2Daba22C3w4Z46gC_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i3/370627083/O1CN01uEH0I522C3w4Bqo7K_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i3/370627083/O1CN01zgwUWt22C3t3pqdn7_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i4/370627083/O1CN01qIPWvd22C3w9U82gV_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i3/370627083/O1CN01R5DeWo22C3w51dmmz_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
            <img
                class="lazyImg"
                src="//img.alicdn.com/imgextra/i1/370627083/O1CN010TrbMz22C3w70zohz_!!370627083.jpg_760x760Q90s50.jpg_.webp"
            />
        </div>
        <!-- 介绍 end -->

        <van-goods-action>
            <van-goods-action-icon icon="home-o" @click="$router.push('/home')" text="首页" />
            <van-goods-action-icon
                icon="cart-o"
                @click="$router.push('/cart')"
                :badge="num"
                text="购物车"
            />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" @click="onbuy(goods)"/>
        </van-goods-action>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("cart");
import { Toast } from "vant";

import swiper from "../components/public/swiper";
export default {
    data() {
        return {
            Images: [
                "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp",
                "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/119728/8/6897/100233/5ecbc70eE7395df62/770cab7e095cba28.jpg!q70.dpg.webp",
                "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/43997/21/12754/274595/5d5f87f1Ec419d2f9/358032d0a7a2ccd7.jpg!q70.dpg.webp",
                // "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/106591/3/3103/148279/5ddcffaeE29b83848/31356c0b5f9cf44a.jpg!q70.dpg.webp",
                // "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/40711/2/15764/95375/5d88a646E893743c6/b27eec800f006db5.jpg!q70.dpg.webp"
            ],
            // Images:[],
            goods: {
                id: 2,
                name: "三星Galaxy Note10+",
                price: "6999.00",
                num: 1
            },

            showShare: false,
            options: [
                [
                    { name: "微信", icon: "wechat" },
                    { name: "微博", icon: "weibo" },
                    { name: "QQ", icon: "qq" }
                ],
                [
                    { name: "复制链接", icon: "link" },
                    { name: "分享海报", icon: "poster" },
                    { name: "二维码", icon: "qrcode" }
                ]
            ]
        };
    },
    methods: {
        // 直接调用vuex里面方法
        ...mapMutations(["add"]),
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
        onbuy(goods){
            this.$store.commit('cart/add',goods);

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
    computed: {
        ...mapState({
            num: state => state.num
        })
    },
    components: {
        swiper
    },
    created(){
        if (this.$route.query.id) {
            console.log(this.$route.query);
            let id=this.$route.query.id;
            var that=this;
            this.$axios.get(`/goodsList/${id}`).then(res=>{
                // console.log(res);
                console.log(res.data.result);
                Object.assign(that.goods,res.data.result)
                // that.goods=res.data.result;
                that.goods.num=1;
                console.log(that.goods);
                that.Images=res.data.result.imgs;
                console.log(that.Images);
            })            
        }
    }
};
</script>

<style lang="scss" scoped>
.arrowleftgo {
    width: 44px;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 99;
}
.share {
    width: 44px;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 99;
}

.my-swipe .van-swipe-item img {
    width: 100%;
}

.yearImg {
    img {
        width: 100%;
    }
}

.content {
    padding: 10px 15px 0px 15px;
    h1 {
        color: #f2270c;
        margin-bottom: 10px;
        font-size: 18px;
        // font-weight:normal;
        span {
            font-size: 12px;
        }
    }
    .text {
        font-size: 14px;
        font-weight: bolder;
        .vanTagOne {
            margin-right: 5px;
        }
    }
}

.strategyImg {
    margin-top: 15px;
    img {
        width: 100%;
    }
}

.introduce {
    img {
        width: 100%;
    }
}
</style>