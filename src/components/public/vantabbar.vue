<template>
    <div>
        <van-tabbar v-model="active" active-color="#e43130">
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/classify" icon="bar-chart-o">分类</van-tabbar-item>
            <!-- <van-tabbar-item to="/myjd" icon="user-circle-o">我的</van-tabbar-item> -->
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>

            <van-tabbar-item to="/myjd" icon="user-circle-o" v-if="$store.state.username">我的</van-tabbar-item>
            <van-tabbar-item to="/login" icon="user-o" v-else>未登录</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
        }
    },
    props:["activevue"],
    created(){
        this.active=this.activevue;
    }
};
</script>

<style lang="scss" scoped>
</style>