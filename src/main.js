import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "popper.js";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

Vue.config.productionTip = false;
Vue.use(VueTelInput);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
