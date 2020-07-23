<template>
    <div>
        <van-sticky>
            <!-- <van-button type="primary">基础用法</van-button> -->
            <van-nav-bar
                :title="$route.name"
                left-arrow
                @click-left="$router.go(-1)"
            />
        </van-sticky>

        <!-- 轮播图 -->
        <van-swipe class="my-swipe vanSwipeBanner" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="//m.360buyimg.com/babel/jfs/t1/113986/33/8908/140298/5ed4edfaEd75637af/cda3ba898e6d6302.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/babel/jfs/t1/114074/7/8301/175841/5ece102eE23bbc373/4db8e744e1c87739.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/babel/jfs/t1/125682/25/3682/144147/5ed4d45cEc43ccc95/f07c6b62b071f879.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/babel/jfs/t1/133016/38/498/203373/5ece2985E34c0c3b0/c0a6fb7e88593e9f.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/babel/jfs/t1/133903/3/674/66005/5ed0969dE4b40ed48/c6676552d987599b.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 轮播图  end -->

        <!--带滑动效果 来电好物 -->
        <van-row class="goods">
            <van-col span="5">
                <img src="https://m.360buyimg.com/babel/jfs/t1/100226/30/11969/25931/5e41012dEbdf6e322/8aab539baf88661c.png" alt="">
            </van-col>
            <van-col span="19">
                <div class="swiper-container swiperContainer1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide homeSeckillSwiperSlide" 
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 3999</p>
                                <p>¥ 5999</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/95782/16/19586/188673/5ea14734Ea1294273/9356c599c022ca52.jpg.dpg" style="width:80%" alt="">
                                <p>¥ 2999</p>
                                <p>¥ 3198</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/120155/22/2623/43909/5ec68cbcEa3ca2f24/2cbecda1bf5c4b11.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 99</p>
                                <p>¥ 198</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/133004/19/57/148086/5ec7da56E258e511c/b185a679015e9ab4.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 59</p>
                                <p>¥ 99</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/115846/27/6859/292789/5ebe7c18E6ed6348b/5f1b7774c5c61faf.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 99</p>
                                <p>¥ 198</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 2999</p>
                                <p>¥ 3198</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 2999</p>
                                <p>¥ 3198</p>
                            </div>
                        </div>
                        <div class="swiper-slide"
                        @click="$router.push('/details')">
                            <div>
                                <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                                style="width:80%" alt="">
                                <p>¥ 2999</p>
                                <p>¥ 3198</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </van-col>
        </van-row>

        <!-- 导航栏 -->
        <van-grid square :column-num="5">
            <van-grid-item v-for="(item,index) in nav.navImage" :key="index">
                <van-image :src="nav.navImage[index]" style="width:100%" />
            </van-grid-item>
        </van-grid>
        <!-- 导航栏 end-->

        <!-- <img src="//m.360buyimg.com/babel/jfs/t1/119672/21/6372/43668/5ec61f80E39dbd966/8d6d3066f310c223.png" style="width:100%" alt=""> -->

        <div>
            <img src="//m.360buyimg.com/babel/jfs/t1/115347/3/8403/350193/5ece37e6Ef12a922a/54d1da7e07dd47f1.gif" alt="">
            <img src="//m.360buyimg.com/babel/jfs/t1/126950/19/3211/433693/5ece37eaEcc7c10ce/9d5f7f4a8cdb13c1.gif" alt="">
        </div>

        <van-row style="background-color:#ed3c2c" class="vanRow1">
            <van-col span="8">
                <img src="//m.360buyimg.com/babel/jfs/t1/122787/13/3680/35196/5ed49f1bEa4f34622/1d233481cca03b31.png" alt="">
            </van-col>
            <van-col span="8">
                <img src="//m.360buyimg.com/babel/jfs/t1/113044/34/8855/38511/5ed35c28E8ebcc474/5765b1c37abc81e4.png" alt="">
            </van-col>
            <van-col span="8">
                <img src="//m.360buyimg.com/babel/jfs/t1/131115/16/697/35985/5ed0994bE3f5a43e3/3eb44e9595a89ec0.png" alt="">
            </van-col>
        </van-row>

        <div class="imgOne">
            <img src="//m.360buyimg.com/babel/jfs/t1/125212/18/3741/87100/5ed5efa7Ea0da63f3/21b57b467cdf799c.gif" alt="">
        </div>

        <recommend></recommend>

        <!-- <div style="height:200px"></div> -->
    </div>
</template>

<script>
    import Swiper from "swiper";
    import recommend from "../components/recommend.vue";

    export default {
        data() {
            return {
                nav: {
                    navImage: [
                        "//m.360buyimg.com/babel/jfs/t1/126639/17/3700/181076/5ed47e44E8f67e07d/6be33fc9ecc50b0a.gif",
                        "//m.360buyimg.com/babel/jfs/t1/89238/14/12752/26739/5e4e53fdE08abe2e4/764cf7605de69c1b.png",
                        "//m.360buyimg.com/babel/jfs/t1/106146/9/12602/28486/5e4a97d2E6b9d27ad/88d0409c1843eb23.png",
                        "//m.360buyimg.com/babel/jfs/t1/101948/3/12594/25673/5e49f055E75213927/2843b1b6e2880a47.png",
                        "//m.360buyimg.com/babel/jfs/t1/111158/29/2082/28621/5e9e606fEe2ac8342/04310f85839e4f7c.png",
                    ],
                }
            }
        },
        mounted(){
            new Swiper('.swiperContainer1', {
                    slidesPerView: 3, //显示个数
                    freeMode: true,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
            });
        },
        components:{
            recommend
        }
    }
</script>

<style lang="scss" scoped>
     .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        // background-color: #39a9ed;
    }

    .vanSwipeBanner{
        // width: 88%;
        // margin: 10px auto;
    }

    .goods{
        margin: 8px;
        background-color: white;
    }

    .swiperContainer1{
        margin-top: 10px;
        .swiper-wrapper{
            .swiper-slide{
                padding-bottom: 10px;
                img{
                    margin: 0px auto;
                }
                p:nth-of-type(1){
                    color: #f2270c;
                    font-size: 14px;
                    text-align: center;

                }
                p:nth-of-type(2){
                    color: #999999;
                    text-decoration:line-through;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }

    .vanRow1{
        padding: 0px 5px;
        .van-col{
            img{
                width: 94%;
                margin: 0px auto;
            }
        }
    }
    .imgOne{
        background-color:#ed3c2c; 
        height:110px;
        line-height: 110px;
        img{
            transform: translateY(10px);
        }
    }
</style>