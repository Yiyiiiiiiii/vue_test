import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import { titleController } from "@/utils"
Vue.use(VueRouter);//使用一个vue插件

const router = new VueRouter({
    //配置router
    routes,
    //  地址模式 /
    mode: "history",
    // 地址模式 哈希 #/
    // mode:"hash",

})

router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title);
    }
});

export default router;
