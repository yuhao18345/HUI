<template>
    <div class="advertpage">
        <!-- advertpage -->
        <!-- <h1>广告页</h1>
        <h2>倒计时{{num}}</h2> -->
        <!-- <van-button plain hairline type="info" @click="goHome">跳过 {{num}}s</van-button> -->

        <van-button @click="goHome" round
            color="linear-gradient(to right, #505acb, #64299f)"
            to="/home">跳过 {{num}}s</van-button>

        <!-- <img src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/106591/3/3103/148279/5ddcffaeE29b83848/31356c0b5f9cf44a.jpg!q70.dpg.webp" alt=""> -->
        <img src="../../assets/guide/advert.jpg" alt="" class="bg">

    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:10,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home");//跳转首页
                }else{
                    this.num--;
                }
            },1000)
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            clearInterval(this.cleardata);
        },
    }
</script>

<style lang="scss" scoped>
    /* .advertpage{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: url("../../assets/guide/guide01.jpg");
    } */
    .bg{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        // height: 100%;
        z-index: -1;
    }

    .van-button{
        position:absolute;
        top: 15px;
        right: 20px;
    }
</style>