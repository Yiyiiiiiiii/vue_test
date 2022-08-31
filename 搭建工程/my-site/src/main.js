import Vue from 'vue'
import App from './App.vue'
import './styles/global.less';
import router from "./router"

import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
// window.$showMessage = showMessage;
// showMessage(dsevfdsgvd,"success");

import "./api/banner";
import "./mock";

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

// 注册事件总线
import "./eventBus";

// 设置仓库
import store from './store';

store.dispatch("setting/fetchSetting")

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 博客测试
// import * as blogApi from "./api/blog";
// blogApi.getBlogType().then((r) => {
//   console.log("博客分类", r);
// })
// blogApi.getBlogs(2, 12, 3).then((r) => {
//   console.log("博客列表", r);
// })

// 评论测试
// import * as blogComment from "./api/blog";
// blogComment.getBlog("asdvgsd").then((r) => {
//   console.log(r);
// })
// blogComment.getComments("asdvgsd").then((r) => {
//   console.log(r);
// })
// blogComment.postComment({
//   nickname: "lalala",
//   content: "svsdbs",
//   blogId: "123",
// }).then((r) => {
//   console.log(r);
// })