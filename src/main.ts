import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Toasted from "vue-toasted";
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate, { fieldsBagName: "veeFields" });
Vue.use(Toasted, { router });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
