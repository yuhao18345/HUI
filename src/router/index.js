import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./routes/home";
import classify from "./routes/classify";
import myjd from "./routes/myjd";
import cart from "./routes/cart";
import login from "./routes/login";
import search from "./routes/search";
import details from "./routes/details";
import publics from "./routes/publics";
import address from "./routes/address";
import order from "./routes/order";
import register from "./routes/register";
import digital from "./routes/digital";
import coupon from "./routes/coupon";

const routes = [
  {
    path:"/",
    redirect: "/advertpage"
    // redirect: "/guidepage"
  },
  home,       //首页
  classify,   //分类
  myjd,       //我的
  ...cart,    //购物车
  login,      //登录
  search,     //搜索
  details,    //详情
  ...publics, //公共路由
  ...address, //地址
  ...order,   //订单
  register,   //注册
  digital,    //数码电器
  coupon,     //优惠券
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes
})

export default router
