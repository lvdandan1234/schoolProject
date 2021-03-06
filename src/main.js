// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  metaCommon from  '../static/js/meta-common.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
import 'vue-awesome-swiper'
import Mint  from 'mint-ui';
import VueVideoPlayer from 'vue-video-player'
import { baseLiveAjaxUrl,baseImgUrl,appId,baseAjaxUrl,baseThirdServiceUrl,baseWsUrl } from "../static/js/config/base-config.js";
Vue.use(Mint);
Vue.use(VueAwesomeSwiper);
Vue.use(VueVideoPlayer);
Vue.use(require('vue-wechat-title'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
