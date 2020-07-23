<template>
    <div>
        <!-- <div class="head">head</div> -->
        <form action="/">
            <van-search
                show-action
                placeholder="请输入关键词"
                @search="onSearch"
                @cancel="onCancel"
                @focus="$router.push('/search')"
            />
        </form>

        <bscroll></bscroll>
        <vantabbar :activevue="1"></vantabbar>

    </div>
</template>

<script>
import bscroll from "../components/bscroll"
import vantabbar from "../components/public/vantabbar.vue"

import { Toast } from 'vant';

export default {
    components:{
        bscroll,
        vantabbar
    },
    methods:{
        onSearch(val) {
            Toast(val);
            // this.$router.push('/search');
        },
        onCancel() {
            Toast('取消');
        },
    }
}
</script>

<style lang="scss" scope>
    
</style>