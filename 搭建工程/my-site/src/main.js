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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
