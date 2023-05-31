import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "@fortawesome/fontawesome-free/css/all.css";

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
