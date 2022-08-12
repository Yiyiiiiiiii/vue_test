/**
 * 
 * @param {String} content 消息内容
 * @param {String} type 消息类型
 * @param {Number} duration 弹窗消失时间
 * @param {HTMLElement} container 容器 传了弹窗就在容器正中间 不传就在body正中间
 */
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
//利用js原生方法写弹窗
export default function (options = {}) {
    // 写成对象
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    // 创建弹窗消息元素
    const div = document.createElement("div");
    // 将图标组件渲染的html放到模板中,需要调用getComponentRootDom方法获取组件dom元素
    const iconDom = getComponentRootDom(Icon, { type })
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    // 设置样式
    // 设置背景颜色的class 类型样式名
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} + ${typeClassName}`;
    // 将div加入到容器中
    // 判断传进来的容器position是否被改动过,被改动过则改为relative
    if (options.container) {
        if (getComputedStyle(container).position == "static") {
            container.style.position = "relative";
        }
    }


    container.appendChild(div);

    // 浏览器强行渲染一次
    div.clientHeight; //导致reflow重排

    // 回归到正常位置 
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;
    // 等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        // once只触发一次
        div.addEventListener("transitionend", function () {
            div.remove();
            // 运行回调函数
            options.callback && options.callback();
        }, { once: true });
    }, duration)
}