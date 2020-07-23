<template>
    <div>
        <div class="swiper-container myswiperContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                    <img :src="item" alt />
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination myswiperPagination"></div>
            <!-- Add Arrows -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        props:["img"],
        mounted(){
            new Swiper('.myswiperContainer', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.myswiperPagination',
                    clickable: true,
                },
                /* navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }, */
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
        img{
            width: 100%;
        }
    }
</style>