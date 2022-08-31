// 事件总线
// 自己写
// export default {
//     $on(eventName,handler){
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     $off(eventName,handler){
//         if(!listeners[eventName]){
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     $emit(eventName,...args){
//         if(!listeners[eventName]){
//             return;
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }

//     }
// }

// vue提供的
import Vue from "vue";
const app = new Vue({});
// export default new Vue({});

// 具体使用
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
//注入到vue中,所有的组件都可以用
Vue.prototype.$bus = app;
export default app;