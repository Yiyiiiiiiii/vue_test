import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
Vue.use(VueRouter);//使用一个vue插件

export default new VueRouter({
    //配置router
    routes,
    //  地址模式 /
    mode: "history",
    // 地址模式 哈希 #/
    // mode:"hash",

})