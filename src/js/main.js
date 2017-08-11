import Vue from "vue";
import Vuerouter from "vue-router";
import Vueresource from "vue-resource";

Vue.use(Vuerouter);
Vue.use(Vueresource);

import App from "../component/app.vue";
import router from "./route.js";

new Vue({
    el:"#app",
    render:c => c(App),
    router
})