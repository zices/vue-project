import Vuerouter from "vue-router";

import indexVue from "../component/index.vue";

export default new Vuerouter({
    routes:[
        {path:"/",redirect:"./index"},
        {path:"/index",component:indexVue}
    ]
})