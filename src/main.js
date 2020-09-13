import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/themes/index.less";
import checkoutside from "@/js/directives/checkoutside.js";
import drag from "@/js/directives/drag";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
