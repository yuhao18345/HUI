<template>
    <div>
        <van-nav-bar title="注册" left-arrow @click-left="$router.go(-1)" />
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注 册</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data() {
        return {
            username: "",
            password: "",
            password2: ""
        };
    },
    methods: {
        onSubmit(params) {
            let _this=this;
            this.$axios.get("register", { params }).then((res) => {
                if (res.data == "200") {
                    console.log(res);

                    Toast({ 
                        message: "注册成功",
                        onOpened(){
                            _this.$router.push("/login");
                        }
                    });
                } else {
                    Toast("注册失败");
                }
            });
        }
    },
};
</script>

<style lang="scss" scoped>
    .van-button--info {
        color: #fff;
        background-color: #ff492f;
        border: 1px solid #ff492f;
    }
</style>