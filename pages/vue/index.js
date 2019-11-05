import Vue from "vue";
import App from "./app.vue";

import Antd from "ant-design-vue";
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;


console.log(process.env.NODE_ENV)

new Vue({
    render: h => h(App)
}).$mount("#app");