<template>
    <div>
        <!-- $router.go(-1) -1表示返回上一级 -->
        <!-- $router.go(1) 1表示刷新当前页面 -->
        <!-- $router.go(2) 2表示返回下一级 -->
                
        <van-row class="topsearchNav" style="background: white;">
            <van-col span="3" @click="$router.go(-1)">
                <span class="iconfont icon-left"></span></van-col>
            <van-col span="17">
                <van-search placeholder="搜索商品名称" v-model="value" @search="onSearch"/>
            </van-col>
            <!-- <van-col span="3"><span class="iconfont icon-sousuo"></span></van-col> -->
            <van-col span="4">
                <van-button id="serach_btn" type="danger" size="small" @click="onSearch">搜索</van-button>
            </van-col>
        </van-row>

        <!-- 搜索发现 -->
        <div class="serachFind">
            <h3>搜索发现</h3>

            <div class="newGoods">
                <img src="//m.360buyimg.com/babel/jfs/t1/119672/21/6372/43668/5ec61f80E39dbd966/8d6d3066f310c223.png" alt="">
            </div>

            <ul>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
                <li><a @click="$router.push('/details')">三星Galaxy Note10+</a></li>
            </ul>
        </div>


    </div>
</template>

<script>
// import { Toast } from 'vant';
    export default {
        data() {
            return {
                value:"",
            }
        },
        methods:{
             onSearch() {
                // Toast(val);
                // console.log(val);
                this.$router.push('/digital');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .serachFind{
        background: white;
        padding: 10px;
        h3{
            margin-bottom: 8px;
        }
        .newGoods{
            img{
                width: 100%;
            }
        }
        ul{
            width: 100%;
            height: 200px;
            background: white;

            li{
                // background: white;
                width: 50%;
                float: left;
                a{
                    display: block;
                    width: 100%;
                    padding: 10px 0px;
                    text-align:center;
                    color: #777;
                }
            }
        }
    }

    .topsearchNav{
        background-color: #F2F2F2;
        .icon-left{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #f7f7f7;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-sousuo{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
        #serach_btn{
            transform: translateY(7px);
            // display: block;
            // width: 50px;
        }

    }
</style>