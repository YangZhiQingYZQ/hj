// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Avue from "@smallwei/avue";
import ElementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
Vue.use(ElementUi);
Vue.use(Avue);
Vue.config.productionTip = false
import mock from "./mockAjax.js";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
