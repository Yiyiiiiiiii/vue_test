/**
 * 获取某个组件渲染的Dom元素
 */
import Vue from "vue";

export default function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}