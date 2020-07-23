<template>
    <div>
        <div class="page">
            <van-nav-bar title="登录" left-arrow  @click-left="$router.go(-1)" />

            <!-- <header class="jd_login_header">
                <a href="javascript:;" class="myicon">
                    <img src="../assets/images/return.png" alt="">
                </a>
                <span class="title">京东登录注册</span>
            </header>-->

            <!-- <van-field type="tel" label="手机号" placeholder="请输入手机号" class="login_tel" />
            <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
                <template #button>
                    <van-button size="small" type="primary">获取验证码</van-button>
                </template>
            </van-field> -->

            <!-- 22222222 -->
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">登 录</van-button>
                </div>
            </van-form>

            <div class="login_register clearfix">
                <a href="javascript:;" class="fl">账号密码登录</a>
                <a href="javascript:;" class="fr" @click="$router.push('/register')">新用户注册</a>
            </div>

            <!-- <main class="jd_login_main">
                <form>
                    <p>
                        <input type="text" class="tel" placeholder="请输入手机号" />
                    </p>
                    <p class="p2">
                        <input type="text" class="verify" placeholder="请输入收到的验证码" />
                        <button class="verifyBtn">获取验证码</button>
                    </p>
                </form>

                <a href="javascript:;" class="login">登录</a>
                <a href="javascript:;" class="onelogin">一键登录</a>

                <div class="bottom clearfix">
                    <a href="javascript:;" class="left">账号密码登录</a>
                    <a href="javascript:;" class="right">手机快速注册</a>
                </div>
            </main> -->

            <footer class="jd_login_footer">
                <!-- <p>其他登录方式</p> -->
                <van-divider :style="{ padding: '0 10px' , borderColor: '#8e8f8f' }">其他登录方式</van-divider>
                <div class="icon">
                    <a href="javascript:;">
                        <img src="../assets/images/share1.png" alt />
                        <span>QQ</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/images/share5.png" alt />
                        <span>微信</span>
                    </a>
                </div>
                <p>未注册的手机号验证后将自动创建京东账号，登录即代表您已同意京东隐私政策</p>
            </footer>

            <vantabbar :activevue="3"></vantabbar>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";
import vantabbar from "../components/public/vantabbar.vue"

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        onSubmit(params) {
            let _this=this;

            /* let path="/my";
            if("path" in _this.$route.query){
                path=_this.$route.query.path;
            } */

            let path="path" in _this.$route.query ? _this.$route.query.path : "/myjd";

            this.$axios.get("login", { params }).then((res) => {
                if (res.data == "200") {
                    console.log(res);
                    
                    Toast({ 
                        message: "登录成功",
                        onOpened(){
                            //记录登录成功用户名到vuex
                            _this.$store.state.username=_this.username;
                            _this.$router.push(path);
                        }
                    });
                } else {
                    Toast("登录失败");
                }
            });
        }
    },
    components:{
        vantabbar
    }
};
</script>

<style lang="scss" scoped>
// @import "../assets/css/login.css";
.van-form{
    margin-top: 10px;
    .van-button--info{
        background-color: #ff492f;
            border: 1px solid #ff492f;
        // background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    }
}

.login_tel {
    margin: 10px 0px;
}
$fontcolor: #999999;

.page {
    // text-align: left;
    position: fixed;
    top: 0;
    left: 0;
    // width: 100%;
    height: 100%;
    background: #fff;
    padding: 0px 10px;
}

.jd_login_header {
    height: 50px;
    width: 100%;
    // background-color: #ccc;
    text-align: center;
    font-size: 20px;
    // line-height: 50px;
    margin-bottom: 1rem;
    display: flex;
    .myicon {
        display: inline-block;
        width: 50px;
        height: 50px;
    }
    .title {
        flex: auto;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        // width: 100%;
        transform: translateX(-25px);
    }
}

/* .jd_login_main {
    form {
        .tel {
            width: 100%;
            height: 3rem;
            border-bottom: 1px solid $fontcolor;
        }
        .p2 {
            margin: 15px 0px;
            display: flex;
            border-bottom: 1px solid $fontcolor;
            .verify {
                flex: auto;
                // width: 100%;
                height: 3rem;
            }
            .verifyBtn {
                display: block;
                width: 6rem;
                height: 2rem;
                text-align: center;
                line-height: 2rem;
                border-left: 1px solid $fontcolor;
                background-color: transparent;
                transform: translateY(0.5rem);
            }
        }
    }

    .login {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        display: block;
        background-color: #f10000;
        border-radius: 1.5rem;
        font-size: 1.16rem;
        color: #fff;
        margin: 15px 0px;
        text-align: center;
    }
    .onelogin {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        display: block;
        background-color: white;
        border-radius: 1.5rem;
        border: 1.5px solid #f10000;
        font-size: 1.16rem;
        color: #f10000;
        text-align: center;
        margin-bottom: 15px;
    }

    .bottom {
        .left {
            float: left;
            color: $fontcolor;
        }
        .right {
            float: right;
            color: $fontcolor;
        }
    }
} */

.jd_login_footer {
    margin-top: 8rem;
    p {
        text-align: center;
        color: $fontcolor;
        font-size: 12px;
        padding: 0px 5px;
    }
    .icon {
        margin: 5px 0px;
        width: 100%;
        height: 6rem;
        text-align: center;
        // line-height: 6rem;
        a {
            display: inline-block;
            width: 3.5rem;
            height: 6rem;
            padding: 0px 10px;
            color: $fontcolor;
            font-size: 14px;
            // background-color: pink;
            img {
                display: block;
                width: 3.5rem;
                margin-top: 0.5rem;
            }
        }
    }
}
</style>