<template>
    <div>
        <!-- guidepage -->
        <!-- <h1>引导页</h1> -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/guide/guide01.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/guide/guide02.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/guide/guide03.jpg" alt="">
                    <!-- <van-button plain type="info" to="/home">进入体验</van-button> -->
                    <!-- <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" to="/home">进入体验</van-button> -->
                    <!-- #cf144b -->
                    <van-button color="linear-gradient(to right, #f4771d, #d32234)" to="/home">开启智能新时代</van-button>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>

    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
        mounted(){
            new Swiper('.guidepagecontainer', {
                pagination: {
                    el: '.guidepagepagination',
                    // dynamicBullets: true,
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
     .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .van-button{
        position: absolute;
        top:80%;
        left: 50%;
        transform: translateX(-64px);
    }
    /* .swiper-container{
        .swiper-wrapper{
            .swiper-slide{
                width: 100%;
                height: 100%;
                img{
                    height: 100%;
                }
            }
        }
    } */
    
</style>