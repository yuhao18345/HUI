import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from "./cart"
import address from "./address"
import order from "./order"

export default new Vuex.Store({
  state: {
    vanTabbar: true,
    username: null,  //用户名
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,   //购物车  详情页与购物车
    address,  //地址
    order,    //订单
  }
})
