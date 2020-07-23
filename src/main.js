import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 公共样式
import "./assets/css/base.css";
// import "./assets/css/reset.css";
import "./assets/font/iconfont.css";

// vant组件库
// $npm i vant -S
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// swiper插件
// npm i swiper -S
import "swiper/css/swiper.min.css";

// npm install animate.css --save
// npm install animate.css@3.7.2 --save
import "animate.css";

// axios配置
// cnpm install axios -S
import axios from "axios"; 

axios.defaults.baseURL = 'http://49.234.116.224:3300/';
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios = axios;

// moment时间戳-过滤器
// npm i moment -S
import moment from 'moment';
Vue.filter('moment', (e)=>{
  return moment(e).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
