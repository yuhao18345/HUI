<template>
    <div>
        <van-nav-bar 
            title="我的红包" 
            left-arrow
            @click-left="$router.go(-1)">
        </van-nav-bar>
        <div class="tem">
            <div class="card">
                <p>
                    <span>使用规则</span> 
                </p>
                <h3>红包余额</h3>
                <h2>
                    <span class="price">¥</span>
                    0.00
                </h2>
            </div>

            <div class="lists">
                <van-row v-for="index in 15" :key="index">
                    <van-col span="3">
                        <img src="../../assets/images/hb.svg" alt="">
                    </van-col>
                    <van-col span="18" class="two">
                        <h3>年货节京享红包 - 红包过期</h3>
                        <p>有效期：2019.12.31-2020.01.17</p>
                    </van-col>
                    <van-col span="3">
                        <span class="price">-1.80</span>
                    </van-col>
                </van-row>
            </div>
            
            <van-divider>到底了</van-divider>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.lists{
    .van-row{
        height: 72px;
        // background-color: lightblue;
        padding: 12px 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;

        .two{
            padding-left: 15px;
        }

        .van-col{
            img{

            }
            h3{
                // height: 40px;
                font-size: 15px;
            }
            p{
                // height: 40px;
            }
            .price{
                font-size: 20px;
            }
        }
    }
}

.tem{
    padding: 10px;
}
.card{
    height: 130px;
    background-color: #ff433d;   
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ff7459;
    color: white;
    text-align:center;
    margin-bottom: 15px;
    p{
        font-size: 12px;
        height: 30px;
        position: relative;
        span{
            // float:right;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
    h3{
        font-size: 14px;
    }
    h2{
        font-size: 45px;
        height: 60px;
        .price{
            font-weight: normal;
            font-size: 26px;
        }
    }
}
</style>